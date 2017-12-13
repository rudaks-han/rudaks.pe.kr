package rudaks.blog.cp.spring.bean;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.GuestbookLogic;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public class GuestbookSpringLogic extends GuestbookLogic
{
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
    public List<Post> listGuestbook()
    {
        return super.listGuestbook();
    }

    @Override
    public void deleteGuestbook(String id)
    {
        super.deleteGuestbook(id);
    }
}
