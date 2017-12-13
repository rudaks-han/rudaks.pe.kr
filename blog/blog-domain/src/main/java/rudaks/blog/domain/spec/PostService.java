package rudaks.blog.domain.spec;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface PostService
{
    Post findPost(String id);
    String registerPost(PostCdo postCod);

    void modifyPost(String id, NameValueList nameValueList);
    void deletePost(String id);
}
