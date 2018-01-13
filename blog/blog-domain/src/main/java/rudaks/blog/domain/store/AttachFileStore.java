package rudaks.blog.domain.store;

import rudaks.blog.domain.entity.AttachFile;

import java.util.List;

public interface AttachFileStore
{
    List<AttachFile> list(String postId);
    String create(AttachFile attachFile);

    void deleteByPostId(String postId);
}
