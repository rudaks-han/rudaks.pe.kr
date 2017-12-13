package rudaks.blog.sp.spring.web;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class PostProviderResource implements PostProvider
{
    @Override
    public List<Post> listPost()
    {
        return null;
    }

    @Override
    public Post findPost(String id)
    {
        return null;
    }

    @Override
    public String registerPost(PostCdo postCdo)
    {
        return null;
    }
}
