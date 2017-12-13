package rudaks.blog.domain.store;

public interface BlogStoreLycler
{
    CategoryStore requestCategoryStore();
    PostStore requestPostStore();
    GuestbookStore requestGuestbookStore();
}
