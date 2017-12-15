package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface PostProvider
{
    List<Post> listPostByCategory(String category, int offset);
    Post findPost(String id);
    String registerPost(PostCdo postCdo);
}
