package rudaks.blog.sp.spring.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BlogReactResource
{
    //
    @RequestMapping(value = { "/*", "/post/*", "/posts/*", "/guestbook/*" }, method = RequestMethod.GET)
    public String index(Model model)
    {
        //
        return "index";
    }
}