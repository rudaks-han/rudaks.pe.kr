package rudaks.blog.domain.logic;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;
import rudaks.blog.domain.store.BlogStoreLycler;
import rudaks.blog.domain.store.GuestbookStore;
import rudaks.blog.domain.store.PostStore;

import java.util.List;

public class PostLogic implements PostService, PostProvider
{
    private PostStore postStore;

    public PostLogic(BlogStoreLycler storeLycler)
    {
        this.postStore = storeLycler.requestPostStore();
    }

    @Override
    public List<Post> listPostByCategory(String category, int offset)
    {
        return postStore.retrieveListByCategory(category, offset);
    }

    @Override
    public Post findPost(String id)
    {
        return postStore.retrieve(id);
    }

    @Override
    public String registerPost(PostCdo postCdo)
    {
        Post post = new Post(postCdo.getCategory(), postCdo.getUsername(), postCdo.getEmail(), postCdo.getTitle(), postCdo.getContent());

        postStore.create(post);

        return post.getId();
    }

    @Override
    public void modifyPost(String id, NameValueList nameValueList)
    {
        Post post = postStore.retrieve(id);

        post.setValues(nameValueList);

        postStore.update(post);
    }

    @Override
    public void deletePost(String id)
    {
        Post post = postStore.retrieve(id);

        postStore.delete(post);
    }
}
