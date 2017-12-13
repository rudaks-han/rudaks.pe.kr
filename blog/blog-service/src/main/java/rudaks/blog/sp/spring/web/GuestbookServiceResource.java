package rudaks.blog.sp.spring.web;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.GuestbookService;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

public class GuestbookServiceResource implements GuestbookService
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
    public void deleteGuestbook(String id)
    {

    }
}
