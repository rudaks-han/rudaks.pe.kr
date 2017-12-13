package rudaks.blog.da.jpa.springdata;

import org.springframework.data.repository.PagingAndSortingRepository;
import rudaks.blog.da.jpa.jpo.GuestbookJpo;

public interface GuestbookRepository extends PagingAndSortingRepository<GuestbookJpo, String>
{
}
