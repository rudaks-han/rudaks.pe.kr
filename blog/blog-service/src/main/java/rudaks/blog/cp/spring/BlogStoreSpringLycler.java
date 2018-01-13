package rudaks.blog.cp.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import rudaks.blog.domain.store.*;

@Component
public class BlogStoreSpringLycler implements BlogStoreLycler
{
    @Autowired
    @Qualifier("categoryJpaStore")
    private CategoryStore categoryStore;

    @Autowired
    @Qualifier("postJpaStore")
    private PostStore postStore;

    @Autowired
    @Qualifier("guestbookJpaStore")
    private GuestbookStore guestbookStore;

    @Autowired
    @Qualifier("attachFileJpaStore")
    private AttachFileStore attachFileStore;

    @Override
    public CategoryStore requestCategoryStore()
    {
        return categoryStore;
    }

    @Override
    public PostStore requestPostStore()
    {
        return postStore;
    }

    @Override
    public GuestbookStore requestGuestbookStore()
    {
        return guestbookStore;
    }

    @Override
    public AttachFileStore requestAttachFileStore()
    {
        return attachFileStore;
    }
}