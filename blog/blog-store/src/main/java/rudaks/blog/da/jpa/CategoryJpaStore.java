package rudaks.blog.da.jpa;

import nara.share.exception.store.AlreadyExistsException;
import nara.share.exception.store.NonExistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import rudaks.blog.da.jpa.jpo.CategoryJpo;
import rudaks.blog.da.jpa.springdata.CategoryRepository;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.store.CategoryStore;

public class CategoryJpaStore implements CategoryStore
{
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public String create(Category category)
    {
        String id = category.getId();
        if (categoryRepository.exists(id))
        {
            throw new AlreadyExistsException(String.format("Category jpo[ID:%s already exit", id));
        }

        CategoryJpo categoryJpo = new CategoryJpo();
        categoryRepository.save(categoryJpo);
        return id;
    }

    @Override
    public void update(Category category)
    {
        String id = category.getId();
        if (!categoryRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Category jpo[ID:%s] to update", id));
        }

        CategoryJpo categoryJpo = categoryRepository.findOne(id);
        categoryJpo.update(category);

        categoryRepository.save(categoryJpo);
    }

    @Override
    public void delete(Category category)
    {
        String id = category.getId();
        if (!categoryRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Category jpo[ID:%s] to update", id));
        }

        CategoryJpo categoryJpo = categoryRepository.findOne(id);
        categoryJpo.update(category);

        categoryRepository.save(categoryJpo);
    }
}
