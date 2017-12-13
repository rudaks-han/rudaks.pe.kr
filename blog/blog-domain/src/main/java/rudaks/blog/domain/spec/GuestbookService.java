package rudaks.blog.domain.spec;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

public interface GuestbookService
{
    String registerGuestbook(GuestbookCdo guestbookCdo);

    void modifyGuestbook(String id, NameValueList nameValueList);
    void deleteGuestbook(String id);
}
