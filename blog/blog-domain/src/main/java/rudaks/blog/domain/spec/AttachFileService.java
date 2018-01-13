package rudaks.blog.domain.spec;

import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.spec.sdo.AttachFileCdo;

import java.util.List;

public interface AttachFileService
{
    List<AttachFile> list(String postId);
    String registerAttach(AttachFileCdo attachFileCdo);
    void deleteAttach(String postId);
}
