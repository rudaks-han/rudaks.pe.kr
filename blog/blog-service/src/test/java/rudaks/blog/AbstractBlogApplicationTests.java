package rudaks.blog;

import lombok.Data;
import nara.share.restclient.NaraRestClient;
import nara.share.restclient.springweb.SpringWebRestClient;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import rudaks.blog.adapter.rest.*;
import rudaks.blog.domain.spec.sdo.CategoryCdo;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

@Data
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = BlogTestApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@DirtiesContext(classMode= DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
public abstract class AbstractBlogApplicationTests
{
    private CategoryCdo sampleCategoryCdo;
    private String sampleCategoryId;

    private PostCdo samplePostCdo;
    private String samplePostId;

    private GuestbookCdo sampleGuestbookCdo;
    private String sampleGuestbookId;

    private NaraRestClient restClient;

    @LocalServerPort
    private int port;

    @Bean
    public NaraRestClient createRestClient()
    {
        if(restClient == null)
        {
            restClient = new SpringWebRestClient("http://localhost:" + port);
        }
        return restClient;
    }

    @Bean
    public CategoryServiceRestAdapter categoryServiceRestAdapter()
    {
        return new CategoryServiceRestAdapter(createRestClient());
    }

    @Bean
    public GuestbookServiceRestAdapter guestbookServiceRestAdapter()
    {
        return new GuestbookServiceRestAdapter(createRestClient());
    }

    @Bean
    public PostServiceRestAdapter postServiceRestAdapter()
    {
        return new PostServiceRestAdapter(createRestClient());
    }

    @Before
    public void setup()
    {

        sampleGuestbookCdo = new GuestbookCdo("1", "rudaks", "rudaks@gmail.com.", "설명");
        sampleGuestbookId = guestbookServiceRestAdapter().registerGuestbook(sampleGuestbookCdo);

        samplePostCdo = new PostCdo("1", "rudaks", "rudaks94@gmail.com", "제목입니다", "내용입니다");
        samplePostId = postServiceRestAdapter().registerPost(samplePostCdo);

    }


}
