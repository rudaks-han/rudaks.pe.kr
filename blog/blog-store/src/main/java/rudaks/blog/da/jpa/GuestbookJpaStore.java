package rudaks.blog.da.jpa;

import nara.share.exception.store.AlreadyExistsException;
import nara.share.exception.store.NonExistenceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import rudaks.blog.da.jpa.jpo.GuestbookJpo;
import rudaks.blog.da.jpa.springdata.GuestbookRepository;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.store.GuestbookStore;

import java.util.List;
import java.util.NoSuchElementException;

public class GuestbookJpaStore implements GuestbookStore
{
    @Autowired
    private GuestbookRepository guestbookRepository;

    @Override
    public List<Guestbook> retrieveList(int offset)
    {
        PageRequest request = new PageRequest(offset, 10, Sort.Direction.DESC, "createdDate");

        Page<GuestbookJpo> guestbookJpos = guestbookRepository.findAll(request);


        List<GuestbookJpo> contentList = guestbookJpos.getContent();
        return GuestbookJpo.toDomains(contentList);
    }

    @Override
    public String create(Guestbook guestbook)
    {
        String id = guestbook.getId();
        if (guestbookRepository.exists(id))
        {
            throw new AlreadyExistsException(String.format("Guestbook jpo[ID:%s already exit", id));
        }

        GuestbookJpo categoryJpo = new GuestbookJpo();
        guestbookRepository.save(categoryJpo);
        return id;
    }

    @Override
    public Guestbook retrieve(String id) throws NoSuchElementException
    {
        GuestbookJpo guestbookJpo = guestbookRepository.findOne(id);
        if(guestbookJpo == null)
        {
            throw new NoSuchElementException(String.format("No Guestbook jpo[ID:%s] to retrieve", id));
        }
        return guestbookJpo.toDomain();
    }

    @Override
    public void update(Guestbook guestbook)
    {
        String id = guestbook.getId();
        if(!guestbookRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Guestbook jpo[ID:%s] to update", id));
        }
        GuestbookJpo guestbookJpo = guestbookRepository.findOne(id);
        guestbookJpo.update(guestbook);
        guestbookRepository.save(guestbookJpo);
    }

    @Override
    public void delete(Guestbook guestbook)
    {
        String id = guestbook.getId();
        if(!guestbookRepository.exists(id))
        {
            throw new NonExistenceException(String.format("No Guestbook jpo[ID:%s] to update", id));
        }
        GuestbookJpo guestbookJpo = guestbookRepository.findOne(id);
        guestbookJpo.update(guestbook);
        guestbookRepository.save(guestbookJpo);
    }
}
