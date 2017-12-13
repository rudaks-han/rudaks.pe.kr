package rudaks.blog.da.jpa.jpo;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

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
}
