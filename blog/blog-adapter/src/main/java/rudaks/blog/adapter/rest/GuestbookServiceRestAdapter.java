package rudaks.blog.adapter.rest;

import nara.share.domain.NameValueList;
import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.GuestbookService;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;

import java.util.List;

public class GuestbookServiceRestAdapter implements GuestbookService
{
    private NaraRestClient naraRestClient;

    public GuestbookServiceRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public String registerGuestbook(GuestbookCdo guestbookCdo)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.GUESTBOOK_S_BUILD)
                                        .setRequestBody(guestbookCdo)
                                        .setResponseType(String.class)
        );
    }

    @Override
    public void modifyGuestbook(String id, NameValueList nameValueList)
    {
        naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.GUESTBOOK_S_MODIFY)
                                        .addPathParam("guestbookId", id)
                                        .setRequestBody(nameValueList)
        );

    }

    @Override
    public void deleteGuestbook(String id)
    {
        naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.GUESTBOOK_S_DELETE)
                                        .addPathParam("guestbookId", id)
        );
    }
}
