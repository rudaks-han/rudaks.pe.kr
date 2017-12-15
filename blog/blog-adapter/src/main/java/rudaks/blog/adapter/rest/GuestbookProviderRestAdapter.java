package rudaks.blog.adapter.rest;

import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.entity.Guestbook;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.CategoryProvider;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public class GuestbookProviderRestAdapter implements GuestbookProvider
{
    private NaraRestClient naraRestClient;

    public GuestbookProviderRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public List<Guestbook> listGuestbook()
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.GUESTBOOK_P_LIST)
                                        .setResponseType(List.class)
        );

    }

    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.GUESTBOOK_P_BUILD)
                                        .setRequestBody(guestbookCdo)
                                        .setResponseType(String.class)
        );
    }
}
