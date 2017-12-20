package rudaks.blog.sp.spring.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rudaks.blog.domain.spec.PostProvider;

@RestController
@RequestMapping("api/p/posts")
public class PostProviderResource implements PostProvider
{
}
