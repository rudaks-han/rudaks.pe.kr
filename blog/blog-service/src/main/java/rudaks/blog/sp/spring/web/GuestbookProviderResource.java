package rudaks.blog.sp.spring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.GuestbookLogic;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

@RestController
@RequestMapping("api/p/guestbooks")
public class GuestbookProviderResource implements GuestbookProvider
{
    @Autowired
    GuestbookLogic guestbookLogic;

    @Override
    @GetMapping
    public List<Post> listGuestbook()
    {
        return guestbookLogic.listGuestbook();
    }

    @Override
    @PostMapping
    public String registerGuestbook(@RequestBody GuestbookCdo guestbookCdo)
    {
        return guestbookLogic.registerGuestbook(guestbookCdo);
    }
}
