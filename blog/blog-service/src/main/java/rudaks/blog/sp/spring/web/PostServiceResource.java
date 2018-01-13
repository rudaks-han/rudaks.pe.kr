package rudaks.blog.sp.spring.web;

import com.fasterxml.jackson.databind.ObjectMapper;
import nara.share.domain.NameValueList;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.AttachFileLogic;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/s/posts")
public class PostServiceResource implements PostService
{
    @Autowired
    private PostLogic postLogic;


    @Override
    @GetMapping("{id}")
    public Post findPost(@PathVariable String id)
    {
        return postLogic.findPost(id);
    }

    @Override
    @PostMapping
    public String registerPost(@RequestBody PostCdo postCdo)
    {
        return postLogic.registerPost(postCdo);
    }

    @Override
    @GetMapping
    public List<Post> listPostByCategory(@RequestParam(required = false) String category, @RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "10") int limit)
    {
        return postLogic.listPostByCategory(category, offset, limit);
    }

    @Override
    @PutMapping("{id}")
    public void modifyPost(@PathVariable String id, @RequestBody NameValueList nameValueList)
    {
         postLogic.modifyPost(id, nameValueList);
    }

    @Override
    @DeleteMapping("{id}")
    public void deletePost(@PathVariable String id)
    {
        postLogic.deletePost(id);
    }

    @PostMapping(value = "upload-file", produces = "application/json; charset=utf8")
    public String uploadFile(@RequestParam("attachFile") MultipartFile attachFile) throws IOException
    {
        String tmpFilesDir = "D:/tmp"; //WebConfig.getString("attach.tmp.dir");

        String originalfileName = attachFile.getOriginalFilename();

        long fileSize = attachFile.getSize();
        String fileExt = FilenameUtils.getExtension(originalfileName).toLowerCase();

        String guid = UUID.randomUUID().toString();
        guid = guid.replaceAll(":", "_");
        String fileName = guid + "." + fileExt;

        File directory = new File(tmpFilesDir);
        if (!directory.exists())
            FileUtils.forceMkdir(directory);

        File destFile = new File(tmpFilesDir + "/" + fileName);

        try
        {
            attachFile.transferTo(destFile);
            destFile = null;
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
        System.out.println("file upload is end ==> " + originalfileName);

        AttachFile attachFileForm = new AttachFile();

        attachFileForm.setFilePath(fileName);
        attachFileForm.setFileName(originalfileName);
        attachFileForm.setFileSize(fileSize);

        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(attachFileForm);
    }
}
