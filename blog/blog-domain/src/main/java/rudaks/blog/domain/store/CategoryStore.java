package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;

import java.util.NoSuchElementException;

public interface CategoryStore
{
    String create(Category category);

    void update(Post post);
    void delete(Post post);
}
