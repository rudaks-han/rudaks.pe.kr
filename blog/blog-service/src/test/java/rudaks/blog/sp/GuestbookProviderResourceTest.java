package rudaks.blog.sp;

import nara.share.domain.NameValueList;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rudaks.blog.AbstractBlogApplicationTests;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Guestbook;

import java.util.List;

public class GuestbookProviderResourceTest extends AbstractBlogApplicationTests
{
    Logger logger = LoggerFactory.getLogger(getClass());

    @Test
    public void test()
    {
        // 조회
        List<Guestbook> list = guestbookProviderRestAdapter().listGuestbook();
        Assert.assertNotNull(list);
    }
}
