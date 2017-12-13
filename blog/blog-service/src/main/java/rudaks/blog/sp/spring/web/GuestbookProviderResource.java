package rudaks.blog.sp.spring.web;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class GuestbookProviderResource implements GuestbookProvider
{
    @Override
    public List<Post> listGuestbook()
    {
        return null;
    }

    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        return null;
    }
}
