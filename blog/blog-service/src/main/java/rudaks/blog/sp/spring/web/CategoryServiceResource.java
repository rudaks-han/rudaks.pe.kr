package rudaks.blog.sp.spring.web;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.CategoryService;

import java.util.List;

public class CategoryServiceResource implements CategoryService
{
    @Override
    public List<Category> listCategory()
    {
        return null;
    }
}
