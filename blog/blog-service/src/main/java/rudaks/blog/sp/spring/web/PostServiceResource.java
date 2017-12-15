package rudaks.blog.sp.spring.web;

import nara.share.domain.NameValueList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;

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
}
