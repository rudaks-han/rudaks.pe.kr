package rudaks.blog.sp.spring.web;

import nara.share.crypt.CryptoUtil;
import nara.share.util.CookieUtil;
import org.apache.catalina.util.ParameterMap;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@RestController
@RequestMapping("api/s/users")
public class UserServiceResource
{
    @Value("${jwt.key}")
    String jwtKey;

    @Value("${admin.userId}")
    String adminUserId;

    @Value("${admin.password}")
    String adminPassword;

    @PostMapping("login")
    public HashMap<String, String> login(HttpServletResponse response, @RequestBody ParameterMap<String, String> parameterMap)
    {
        HashMap hmResult = new HashMap();

        String userId = parameterMap.get("userId");
        String password = parameterMap.get("password");

        if (adminUserId.equals(userId) && adminPassword.equals(password))
        {
            try
            {
                String key = CryptoUtil.encrypt(jwtKey, userId);
                hmResult.put("result", "success");
                hmResult.put("key", key);

                CookieUtil.setCookie(response, "uid", key, 60*60*24*365);
            }
            catch (Exception e)
            {
                e.printStackTrace();
            }
        }
        else
        {
            hmResult.put("result", "fail");
        }

        return hmResult;
    }
}
