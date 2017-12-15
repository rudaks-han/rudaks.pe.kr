package rudaks.blog.cp.spring.bean;

import nara.share.domain.NameValueList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.sdo.PostCdo;
import rudaks.blog.domain.store.BlogStoreLycler;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PostSpringLogic extends PostLogic
{
    @Autowired
    public PostSpringLogic(BlogStoreLycler storeLycler)
    {
        super(storeLycler);
    }

    @Override
    public List<Post> listPostByCategory(String category, int offset)
    {
        return super.listPostByCategory(category, offset);
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
