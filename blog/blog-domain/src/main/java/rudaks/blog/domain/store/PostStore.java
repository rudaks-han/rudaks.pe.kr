package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Post;

import java.util.NoSuchElementException;

public interface PostStore
{
    String create(Post post);
    Post retrieve(String id) throws NoSuchElementException;

    void update(Post post);
    void delete(Post post);
}
