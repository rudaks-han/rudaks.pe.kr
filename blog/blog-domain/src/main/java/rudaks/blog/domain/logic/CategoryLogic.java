package rudaks.blog.domain.logic;

import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.CategoryProvider;
import rudaks.blog.domain.spec.CategoryService;
import rudaks.blog.domain.store.BlogStoreLycler;
import rudaks.blog.domain.store.CategoryStore;

import java.util.List;

public class CategoryLogic implements CategoryService, CategoryProvider
{
    private CategoryStore categoryStore;

    public CategoryLogic(BlogStoreLycler storeLycler)
    {
        this.categoryStore = storeLycler.requestCategoryStore();
    }

    @Override
    public List<Category> listCategory()
    {
        return categoryStore.retreiveList();
    }
}
