package rudaks.blog.domain.logic;

import rudaks.blog.domain.entity.AttachFile;
import rudaks.blog.domain.store.AttachFileStore;
import rudaks.blog.domain.store.BlogStoreLycler;

import java.util.List;

public class AttachFileLogic implements AttachFileStore
{
    private AttachFileStore attachFileStore;

    public AttachFileLogic(BlogStoreLycler storeLycler)
    {
        this.attachFileStore = storeLycler.requestAttachFileStore();
    }

    @Override
    public List<AttachFile> list(String postId)
    {
        return attachFileStore.list(postId);
    }

    @Override
    public void deleteByPostId(String postId)
    {
        attachFileStore.deleteByPostId(postId);
    }

    @Override
    public String create(AttachFile attachFile)
    {
        attachFileStore.create(attachFile);

        return attachFile.getPostId();
    }

}
