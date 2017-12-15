package rudaks.blog.sp.spring.web;

import nara.share.domain.NameValueList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.logic.GuestbookLogic;
import rudaks.blog.domain.spec.GuestbookService;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

@RestController
@RequestMapping("api/s/guestbooks")
public class GuestbookServiceResource implements GuestbookService
{
    @Autowired
    GuestbookLogic guestbookLogic;

    @Override
    @PostMapping
    public String registerGuestbook(@RequestBody GuestbookCdo guestbookCdo)
    {
        return guestbookLogic.registerGuestbook(guestbookCdo);
    }

    @Override
    @PutMapping("{id}")
    public void modifyGuestbook(@PathVariable String id, @RequestBody NameValueList nameValueList)
    {
        guestbookLogic.modifyGuestbook(id, nameValueList);
    }

    @Override
    @DeleteMapping("{id}")
    public void deleteGuestbook(@PathVariable String id)
    {
        guestbookLogic.deleteGuestbook(id);
    }
}
