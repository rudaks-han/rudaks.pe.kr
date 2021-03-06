package rudaks.blog.interceptor;

import nara.share.crypt.CryptoUtil;
import nara.share.util.CookieUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginCheckInterceptor implements HandlerInterceptor
{
    @Value("${jwt.key}")
    String jwtKey;

    @Value("${admin.userId}")
    String adminUserId;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
                    throws Exception
    {
        String uri = request.getRequestURI();
        if (!uri.startsWith("/api/s/"))
        {
            return true;
        }

        String authorization = request.getHeader("Authorization");
        boolean isAdmin = false;

        if (authorization != null)
        {
            String userId = CryptoUtil.decrypt(jwtKey, authorization);

            if (adminUserId.equals(userId))
            {
                request.setAttribute("role", "admin");
                response.setHeader("role", "admin");
                isAdmin = true;
            }
        }

        String method = request.getMethod();
        String role = (String) request.getAttribute("role");

        System.err.println("authorization : " + authorization);
        System.err.println("role : " + role);

        if (uri.startsWith("/api/s/posts")
                && ("POST".equals(method) || "PUT".equals(method) || "DELETE".equals(method)))
        {
            if (!isAdmin)
            {
                return false;
            }
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
                    ModelAndView modelAndView) throws Exception
    {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
                    throws Exception
    {
    }

}