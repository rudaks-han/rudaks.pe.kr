package rudaks.blog.sp;

import nara.share.domain.NameValueList;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import rudaks.blog.AbstractBlogApplicationTests;

public class PostServiceResourceTest extends AbstractBlogApplicationTests
{
    Logger logger = LoggerFactory.getLogger(getClass());

    @Test
    public void test()
    {
        postServiceRestAdapter().findPost(getSamplePostId());

        postServiceRestAdapter().listPostByCategory("jsp", 10, 5);

        // 수정
        NameValueList nameValues = new NameValueList();
        nameValues.add("title", "수정제목");
        nameValues.add("content", "수정내용");

        postServiceRestAdapter().modifyPost(getSamplePostId(), nameValues);

        // 삭제
        postServiceRestAdapter().deletePost(getSamplePostId());
    }
}
