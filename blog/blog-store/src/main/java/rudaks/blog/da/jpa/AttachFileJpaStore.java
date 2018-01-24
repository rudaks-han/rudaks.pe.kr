package rudaks.blog.da.jpa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import rudaks.blog.da.jpa.jpo.AttachFileJpo;
import rudaks.blog.da.jpa.springdata.AttachFileRepository;
import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.store.AttachFileStore;

import java.util.ArrayList;
import java.util.List;

@Repository
public class AttachFileJpaStore implements AttachFileStore
{
    @Autowired
    private AttachFileRepository attachFileRepository;

    @Override
    public List<AttachFile> list(String postId)
    {
        Iterable<AttachFileJpo> it = attachFileRepository.findByPostIdOrderBySeq(postId);
        /*List<AttachFileJpo> attachFileJpos =
                        StreamSupport.stream(it.spliterator(), false).collect(Collectors.toList());*/

        List<AttachFileJpo> attachFileJpos = new ArrayList<AttachFileJpo>();

        for (AttachFileJpo attachFileJpo: it)
        {
            attachFileJpos.add(attachFileJpo);
        }
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
