package rudaks.blog.sp.spring.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rudaks.blog.domain.spec.GuestbookProvider;

@RestController
@RequestMapping("api/p/guestbooks")
public class GuestbookProviderResource implements GuestbookProvider
{
}
