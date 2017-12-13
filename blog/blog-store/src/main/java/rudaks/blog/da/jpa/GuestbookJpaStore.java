package rudaks.blog.da.jpa;

import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.store.GuestbookStore;

import java.util.NoSuchElementException;

public class GuestbookJpaStore implements GuestbookStore
{
    @Override
    public String create(Guestbook guestbook)
    {
        return null;
    }

    @Override
    public Post retrieve(String id) throws NoSuchElementException
    {
        return null;
    }

    @Override
    public void update(Guestbook guestbook)
    {

    }

    @Override
    public void delete(Guestbook guestbook)
    {

    }
}
