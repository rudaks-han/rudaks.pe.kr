package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Post;

import java.util.List;
import java.util.NoSuchElementException;

public interface PostStore
{
    List<Post> retrieveListByCategory(String category, int offset, int limit);
    String create(Post post);
    Post retrieve(String id) throws NoSuchElementException;

    void update(Post post);
    void delete(Post post);
}
