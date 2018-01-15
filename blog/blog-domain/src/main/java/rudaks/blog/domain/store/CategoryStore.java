package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.Category;

import java.util.List;

public interface CategoryStore
{
    List<Category> retreiveList(String includeCount);

    Category retrieve(String id);
    Category retrieveByCategory(String category);
    String create(Category category);

    void update(Category category);
    void delete(Category category);
}
