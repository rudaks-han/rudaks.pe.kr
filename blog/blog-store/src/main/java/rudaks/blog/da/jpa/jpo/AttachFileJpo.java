package rudaks.blog.da.jpa.jpo;

import lombok.Data;
import org.springframework.beans.BeanUtils;
import rudaks.blog.domain.entity.AttachFile;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.util.ArrayList;
import java.util.List;

@Data
@IdClass(AttachFileId.class)
@Entity(name = "t_attach_file")
public class AttachFileJpo
{
    @Id
    private String postId;
    @Id
    private int seq;
    private String fileName;
    private String filePath;
    private long fileSize;

    public AttachFileJpo() {}

    public AttachFileJpo(AttachFile attachFile)
    {
        BeanUtils.copyProperties(attachFile, this);
    }

    public void update(AttachFile attachFile)
    {
        BeanUtils.copyProperties(attachFile, this);
    }

    public AttachFile toDomain()
    {
        AttachFile attachFile = new AttachFile(postId);
        BeanUtils.copyProperties(this, attachFile);
        return attachFile;
    }

    public static List<AttachFile> toDomains(List<AttachFileJpo> attachFileJpos)
    {
        /*return attachFileJpos.stream()
                        .map(jpo -> jpo.toDomain())
                        .collect(Collectors.toList());*/
        List<AttachFile> list = new ArrayList<AttachFile>();

        for (AttachFileJpo attachFileJpo: attachFileJpos)
        {
            list.add(attachFileJpo.toDomain());
        }

        return list;
    }
}
