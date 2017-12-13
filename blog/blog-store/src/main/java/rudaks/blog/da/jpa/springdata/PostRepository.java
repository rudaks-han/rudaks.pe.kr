package rudaks.blog.da.jpa.springdata;

import org.springframework.data.repository.PagingAndSortingRepository;
import rudaks.blog.da.jpa.jpo.PostJpo;

public interface PostRepository extends PagingAndSortingRepository<PostJpo, String>
{
}
