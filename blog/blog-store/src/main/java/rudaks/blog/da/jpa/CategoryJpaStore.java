package rudaks.blog.da.jpa;

import nara.share.exception.store.AlreadyExistsException;
import nara.share.exception.store.NonExistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import rudaks.blog.da.jpa.jpo.CategoryJpo;
import rudaks.blog.da.jpa.springdata.CategoryRepository;
import rudaks.blog.da.jpa.springdata.PostRepository;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.store.CategoryStore;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Repository
public class CategoryJpaStore implements CategoryStore
{
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private PostRepository postRepository;

    @Override
    public List<Category> retreiveList(String includeCount)
    {
        Iterable<CategoryJpo> it = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
        List<CategoryJpo> categoryJpos =
                StreamSupport.stream(it.spliterator(), false).collect(Collectors.toList());

        if ("Y".equals(includeCount))
        {
            for (CategoryJpo categoryJpo: categoryJpos)
            {
                long count = postRepository.countByCategoryAndDeleteFlag(categoryJpo.getCategory(), "N");
                categoryJpo.setPostCount(count);
            }
        }

        return CategoryJpo.toDomains(categoryJpos);
    }

    @Override
    public String create(Category category)
    {
        String id = category.getId();
        if (categoryRepository.exists(id))
        {
            throw new AlreadyExistsException(String.format("Category jpo[ID:%s already exit", id));
        }

        categoryRepository.save(new CategoryJpo(category));
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
