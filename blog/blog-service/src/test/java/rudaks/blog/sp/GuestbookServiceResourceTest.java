package rudaks.blog.sp;

import nara.share.domain.NameValueList;
import org.junit.Assert;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rudaks.blog.AbstractBlogApplicationTests;
import rudaks.blog.domain.entity.Guestbook;

import java.util.List;

public class GuestbookServiceResourceTest extends AbstractBlogApplicationTests
{
    Logger logger = LoggerFactory.getLogger(getClass());

    @Test
    public void test()
    {
        // 수정
        NameValueList nameValues = new NameValueList();
        nameValues.add("username", "한경만2");
        nameValues.add("email", "rudaks94@gmail.com");
        nameValues.add("comment", "내용 수정");

        guestbookServiceRestAdapter().modifyGuestbook(getSampleGuestbookId(), nameValues);

        // 삭제
        guestbookServiceRestAdapter().deleteGuestbook(getSampleGuestbookId());
    }
}
