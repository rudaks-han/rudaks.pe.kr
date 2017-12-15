package rudaks.blog.cp.spring.bean;

import nara.share.domain.NameValueList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.GuestbookLogic;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.store.BlogStoreLycler;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class GuestbookSpringLogic extends GuestbookLogic
{
    @Override
    public List<Guestbook> listGuestbook(int offset) {
        return super.listGuestbook(offset);
    }

    @Autowired
    public GuestbookSpringLogic(BlogStoreLycler storeLycler)
    {
        super(storeLycler);
    }

    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        return super.registerGuestbook(guestbookCdo);
    }

    @Override
    public void modifyGuestbook(String id, NameValueList nameValueList)
    {
        super.modifyGuestbook(id, nameValueList);
    }

    @Override
    public void deleteGuestbook(String id)
    {
        super.deleteGuestbook(id);
    }
}
