package rudaks.blog.cp.spring.bean;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class PostSpringLogic extends PostLogic
{
    @Override
    public List<Post> listPost()
    {
        return super.listPost();
    }

    @Override
    public Post findPost(String id)
    {
        return super.findPost(id);
    }

    @Override
    public String registerPost(PostCdo postCod)
    {
        return super.registerPost(postCod);
    }

    @Override
    public void modifyPost(String id, NameValueList nameValueList)
    {
        super.modifyPost(id, nameValueList);
    }

    @Override
    public void deletePost(String id)
    {
        super.deletePost(id);
    }
}
