package rudaks.blog.da.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Repository;
import rudaks.blog.da.jpa.jpo.AttachFileJpo;
import rudaks.blog.da.jpa.springdata.AttachFileRepository;
import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.store.AttachFileStore;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Repository
public class AttachFileJpaStore implements AttachFileStore
{
    @Autowired
    private AttachFileRepository attachFileRepository;

    @Override
    public List<AttachFile> list(String postId)
    {
        Iterable<AttachFileJpo> it = attachFileRepository.findByPostIdOrderBySeq(postId);
        List<AttachFileJpo> attachFileJpos =
                        StreamSupport.stream(it.spliterator(), false).collect(Collectors.toList());
        return AttachFileJpo.toDomains(attachFileJpos);
    }

    @Override
    public String create(AttachFile attachFile)
    {
        attachFileRepository.save(new AttachFileJpo(attachFile));

        return attachFile.getPostId();
    }

    @Override
    public void deleteByPostId(String postId)
    {
        attachFileRepository.deleteByPostId(postId);
    }
}
