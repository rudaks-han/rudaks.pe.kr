package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface GuestbookProvider
{
    List<Post> listGuestbook();
    String registerGuestbook(GuestbookCdo guestbookCdo);
}
