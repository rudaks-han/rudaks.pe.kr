package rudaks.blog.da.jpa;

import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.store.PostStore;

import java.util.NoSuchElementException;

public class PostJpaStore implements PostStore
{
    @Override
    public String create(Post post)
    {
        return null;
    }

    @Override
    public Post retrieve(String id) throws NoSuchElementException
    {
        return null;
    }

    @Override
    public void update(Post post)
    {

    }

    @Override
    public void delete(Post post)
    {

    }
}
