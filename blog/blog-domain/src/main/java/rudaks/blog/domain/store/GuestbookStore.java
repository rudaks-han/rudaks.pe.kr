package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.entity.Post;

import java.util.List;
import java.util.NoSuchElementException;

public interface GuestbookStore
{
    List<Guestbook> retrieveList(int offset);
    String create(Guestbook guestbook);
    Guestbook retrieve(String id) throws NoSuchElementException;

    void update(Guestbook guestbook);
    void delete(Guestbook guestbook);
}
