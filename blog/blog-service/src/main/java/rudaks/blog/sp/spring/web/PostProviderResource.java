package rudaks.blog.sp.spring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

@RestController
@RequestMapping("api/p/posts")
public class PostProviderResource implements PostProvider
{
    @Autowired
    private PostLogic postLogic;

    @Override
    @GetMapping
    public List<Post> listPostByCategory(@RequestParam String category, @RequestParam(defaultValue = "0") int offset) {
        return postLogic.listPostByCategory(category, offset);
    }

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
}
