package rudaks.blog.domain.logic;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.GuestbookService;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public class GuestbookLogic implements GuestbookService, GuestbookProvider
{
    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        return null;
    }

    @Override
    public void modifyGuestbook(String id, NameValueList nameValueList)
    {

    }

    @Override
    public List<Post> listGuestbook()
    {
        return null;
    }

    @Override
    public void deleteGuestbook(String id)
    {

    }
}
