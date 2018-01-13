package rudaks.blog.domain.logic;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;
import rudaks.blog.domain.store.*;

import java.util.List;

public class PostLogic implements PostService, PostProvider
{
    private PostStore postStore;

    private CategoryStore categoryStore;

    private AttachFileStore attachFileStore;

    public PostLogic(BlogStoreLycler storeLycler)
    {
        this.postStore = storeLycler.requestPostStore();
        this.categoryStore = storeLycler.requestCategoryStore();
        this.attachFileStore = storeLycler.requestAttachFileStore();
    }

    @Override
    public List<Post> listPostByCategory(String category, int offset, int limit)
    {
        return postStore.retrieveListByCategory(category, offset, limit);
    }

    @Override
    public Post findPost(String id)
    {
        Post post = postStore.retrieve(id);

        if (post != null)
        {
            Category category = categoryStore.retrieve(post.getCategory());
            post.setCategoryName(category.getName());

            List<AttachFile> attachFiles = attachFileStore.list(id);
            post.setAttachFiles(attachFiles);

            if (attachFiles != null)
            {
                String filePath = "";
                String fileName = "";
                String fileSize = "";

                for (int i=0; i<attachFiles.size(); i++)
                {
                    if (i> 0)
                    {
                        filePath += ",";
                        fileName += ",";
                        fileSize += ",";
                    }

                    filePath += attachFiles.get(i).getFilePath();
                    fileName += attachFiles.get(i).getFileName();
                    fileSize += attachFiles.get(i).getFileSize();
                }

                post.setFilePath(filePath);
                post.setFileName(fileName);
                post.setFileSize(fileSize);
            }


        }

        return post;
    }

    @Override
    public String registerPost(PostCdo postCdo)
    {
        Post post = new Post(postCdo.getCategory(), postCdo.getUsername(), postCdo.getEmail(), postCdo.getTitle(), postCdo.getContent());

        String postId = postStore.create(post);

        if (postCdo.getFilePath() != null && postCdo.getFilePath().size() > 0)
        {
            for (int i=0; i<postCdo.getFilePath().size(); i++)
            {
                AttachFile attachFile = new AttachFile(postId, i, postCdo.getFileName().get(i), postCdo.getFilePath().get(i), postCdo.getFileSize().get(i));
                attachFileStore.create(attachFile);
            }
        }

        return post.getId();
    }

    @Override
    public void modifyPost(String id, NameValueList nameValueList)
    {
        Post post = postStore.retrieve(id);

        post.setValues(nameValueList);

        postStore.update(post);

        attachFileStore.deleteByPostId(id);

        String filePath = nameValueList.getValueOf("filePath");
        String fileName = nameValueList.getValueOf("fileName");
        String fileSize = nameValueList.getValueOf("fileSize");
        if (filePath != null && filePath.length() > 0)
        {
            String [] filePathList = filePath.split(",");
            String [] fileNameList = fileName.split(",");
            String [] fileSizeList = fileSize.split(",");
            for (int i=0; i<filePathList.length; i++)
            {
                AttachFile attachFile = new AttachFile(id, i, fileNameList[i], filePathList[i], Long.parseLong(fileSizeList[i]));
                attachFileStore.create(attachFile);
            }
        }
     }

    @Override
    public void deletePost(String id)
    {
        Post post = postStore.retrieve(id);

        postStore.delete(post);
    }
}
