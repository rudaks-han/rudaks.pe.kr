package rudaks.blog.cp.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import rudaks.blog.domain.store.BlogStoreLycler;
import rudaks.blog.domain.store.CategoryStore;
import rudaks.blog.domain.store.GuestbookStore;
import rudaks.blog.domain.store.PostStore;

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
}