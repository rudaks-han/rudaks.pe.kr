package rudaks.blog.da.jpa.springdata;

import org.springframework.data.repository.PagingAndSortingRepository;
import rudaks.blog.da.jpa.jpo.CategoryJpo;

public interface CategoryRepository extends PagingAndSortingRepository<CategoryJpo, String>
{
}
