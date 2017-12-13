package rudaks.blog.sp.spring.web;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.CategoryProvider;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public class CategoryProviderResource implements CategoryProvider
{
    @Override
    public List<Category> listCategory()
    {
        return null;
    }
}
