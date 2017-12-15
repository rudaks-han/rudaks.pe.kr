package rudaks.blog.sp.spring.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.logic.GuestbookLogic;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

@RestController
@RequestMapping("api/p/guestbooks")
public class GuestbookProviderResource implements GuestbookProvider
{
    @Autowired
    GuestbookLogic guestbookLogic;

    @Override
    @GetMapping
    public List<Guestbook> listGuestbook(@RequestParam(defaultValue = "0") int offset) {
        return guestbookLogic.listGuestbook(offset);
    }

    @Override
    @PostMapping
    public String registerGuestbook(@RequestBody GuestbookCdo guestbookCdo)
    {
        return guestbookLogic.registerGuestbook(guestbookCdo);
    }
}
