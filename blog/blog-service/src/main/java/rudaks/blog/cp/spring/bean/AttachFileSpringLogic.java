package rudaks.blog.cp.spring.bean;

import nara.share.domain.NameValueList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.AttachFileLogic;
import rudaks.blog.domain.logic.PostLogic;
import rudaks.blog.domain.spec.sdo.PostCdo;
import rudaks.blog.domain.store.BlogStoreLycler;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AttachFileSpringLogic extends AttachFileLogic
{
    @Autowired
    public AttachFileSpringLogic(BlogStoreLycler storeLycler)
    {
        super(storeLycler);
    }

    @Override
    public List<AttachFile> list(String postId)
    {
        return super.list(postId);
    }

    @Override
    public void deleteByPostId(String postId)
    {
        super.deleteByPostId(postId);
    }

    @Override
    public String create(AttachFile attachFile)
    {
        return super.create(attachFile);
    }

}
