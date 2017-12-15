package rudaks.blog.domain.logic;

import nara.share.domain.NameValueList;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.GuestbookService;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.store.BlogStoreLycler;
import rudaks.blog.domain.store.GuestbookStore;

import java.util.List;

public class GuestbookLogic implements GuestbookService, GuestbookProvider
{
    private GuestbookStore guestbookStore;

    public GuestbookLogic(BlogStoreLycler storeLycler)
    {
        this.guestbookStore = storeLycler.requestGuestbookStore();
    }

    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        Guestbook guestbook = new Guestbook(guestbookCdo.getRef(), guestbookCdo.getUsername(), guestbookCdo.getEmail(), guestbookCdo.getComment());
        guestbookStore.create(guestbook);

        return guestbook.getId();
    }

    @Override
    public void modifyGuestbook(String id, NameValueList nameValueList)
    {
        Guestbook guestbook = guestbookStore.retrieve(id);

        guestbook.setValues(nameValueList);

        guestbookStore.update(guestbook);
    }

    @Override
    public List<Guestbook> listGuestbook(int offset)
    {
        return guestbookStore.retrieveList(offset);
    }

    @Override
    public void deleteGuestbook(String id)
    {
        Guestbook guestbook = guestbookStore.retrieve(id);

        guestbookStore.delete(guestbook);
    }
}
