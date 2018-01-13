package rudaks.blog.da.jpa.springdata;

import org.springframework.data.repository.PagingAndSortingRepository;
import rudaks.blog.da.jpa.jpo.AttachFileJpo;

import java.util.List;

public interface AttachFileRepository extends PagingAndSortingRepository<AttachFileJpo, String>
{
    List<AttachFileJpo> findByPostIdOrderBySeq(String postId);

    void deleteByPostId(String postId);
}
