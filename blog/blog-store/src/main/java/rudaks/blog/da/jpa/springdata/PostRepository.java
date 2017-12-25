package rudaks.blog.da.jpa.springdata;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import rudaks.blog.da.jpa.jpo.PostJpo;

import java.util.List;

public interface PostRepository extends PagingAndSortingRepository<PostJpo, String>
{
    Page<PostJpo> findByCategory(String category, Pageable pageRequest);
    Long countByCategoryAndDeleteFlag(String category, String deleteFlag);
}
