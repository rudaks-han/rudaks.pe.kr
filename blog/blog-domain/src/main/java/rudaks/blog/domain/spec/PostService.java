package rudaks.blog.domain.spec;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface PostService
{
    List<Post> listPostByCategory(String category, int offset);
    Post findPost(String id);
    String registerPost(PostCdo postCdo);
    void modifyPost(String id, NameValueList nameValueList);
    void deletePost(String id);
}
