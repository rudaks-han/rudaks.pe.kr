package rudaks.blog.sp.spring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.CategoryLogic;
import rudaks.blog.domain.spec.CategoryProvider;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

@RestController
@RequestMapping("api/p/categories")
public class CategoryProviderResource implements CategoryProvider
{
    @Autowired
    CategoryLogic categoryLogic;

    @Override
    @GetMapping
    public List<Category> listCategory()
    {
        return categoryLogic.listCategory();
    }
}
