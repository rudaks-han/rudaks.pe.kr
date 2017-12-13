package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface PostProvider
{
    List<Post> listPost();
    Post findPost(String id);
    String registerPost(PostCdo postCdo);
}
