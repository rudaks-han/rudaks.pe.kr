package rudaks.blog.da.jpa.jpo;

import lombok.Data;
import org.springframework.beans.BeanUtils;
import rudaks.blog.domain.entity.Guestbook;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity(name = "t_guestbook")
public class GuestbookJpo
{
    @Id
    private String id;
    private String ref;
    private String username;
    private String email;
    private String ipaddress;
    private String deleteFlag;
    private String password;
    @Lob
    private String comment;
    private String createdDate;
    private String updatedDate;

    public GuestbookJpo() {}

    public GuestbookJpo(Guestbook guestbook)
    {
        BeanUtils.copyProperties(guestbook, this);
    }

    public void update(Guestbook guestbook)
    {
        BeanUtils.copyProperties(guestbook, this);
    }

    public Guestbook toDomain()
    {
        Guestbook guestbook = new Guestbook(id);
        BeanUtils.copyProperties(this, guestbook);
        return guestbook;
    }

    public static List<Guestbook> toDomains(List<GuestbookJpo> guestbookJpos)
    {
        /*return guestbookJpos.stream()
                        .map(jpo -> jpo.toDomain())
                        .collect(Collectors.toList());*/

        List<Guestbook> list = new ArrayList<Guestbook>();

        for (GuestbookJpo guestbookJpo: guestbookJpos)
        {
            list.add(guestbookJpo.toDomain());
        }

        return list;
    }
}
