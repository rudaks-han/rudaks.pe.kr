package rudaks.blog.sp.spring.web;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;

public class PostServiceResource implements PostService
{
    @Override
    public Post findPost(String id)
    {
        return null;
    }

    @Override
    public String registerPost(PostCdo postCod)
    {
        return null;
    }

    @Override
    public void modifyPost(String id, NameValueList nameValueList)
    {

    }

    @Override
    public void deletePost(String id)
    {

    }
}
