package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public interface GuestbookProvider
{
    List<Guestbook> listGuestbook(int offset);
    String registerGuestbook(GuestbookCdo guestbookCdo);
}
