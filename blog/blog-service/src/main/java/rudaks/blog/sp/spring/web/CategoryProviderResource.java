package rudaks.blog.sp.spring.web;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import rudaks.blog.domain.spec.CategoryProvider;

@RestController
@RequestMapping("api/p/categories")
public class CategoryProviderResource implements CategoryProvider
{
}
