package rudaks.blog.domain.logic;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.CategoryProvider;
import rudaks.blog.domain.spec.CategoryService;

import java.util.List;

public class CategoryLogic implements CategoryService, CategoryProvider
{
    @Override
    public List<Category> listCategory()
    {
        return null;
    }
}
