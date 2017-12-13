package rudaks.blog.domain.logic;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class PostLogic implements PostService, PostProvider
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
