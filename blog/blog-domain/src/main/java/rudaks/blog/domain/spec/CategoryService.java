package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Category;

import java.util.List;

public interface CategoryService
{
    List<Category> listCategory(String includeCount);
}
