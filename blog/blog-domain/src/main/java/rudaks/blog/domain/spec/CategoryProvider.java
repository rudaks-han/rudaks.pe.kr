package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public interface CategoryProvider
{
    List<Category> listCategory();
}
