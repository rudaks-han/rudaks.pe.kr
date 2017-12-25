package rudaks.blog.cp.spring.bean;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.logic.CategoryLogic;
import rudaks.blog.domain.store.BlogStoreLycler;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CategorySpringLogic extends CategoryLogic
{
    @Autowired
    public CategorySpringLogic(BlogStoreLycler storeLycler)
    {
        super(storeLycler);
    }

    @Override
    public List<Category> listCategory(String includeCount)
    {
        return super.listCategory(includeCount);
    }
}
