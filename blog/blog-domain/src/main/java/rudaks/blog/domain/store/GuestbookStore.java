package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.entity.Post;

import java.util.NoSuchElementException;

public interface GuestbookStore
{
    String create(Guestbook guestbook);
    Post retrieve(String id) throws NoSuchElementException;

    void update(Guestbook guestbook);
    void delete(Guestbook guestbook);
}
