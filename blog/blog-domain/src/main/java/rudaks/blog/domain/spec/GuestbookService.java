package rudaks.blog.domain.spec;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public interface GuestbookService
{
    List<Guestbook> listGuestbook(int offset);
    String registerGuestbook(GuestbookCdo guestbookCdo);
    void modifyGuestbook(String id, NameValueList nameValueList);
    void deleteGuestbook(String id);
}
