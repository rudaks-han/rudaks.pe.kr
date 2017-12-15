package rudaks.blog.adapter.rest;

import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.GuestbookProvider;
import rudaks.blog.domain.spec.PostProvider;
import rudaks.blog.domain.spec.sdo.GuestbookCdo;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class PostProviderRestAdapter implements PostProvider
{
    private NaraRestClient naraRestClient;

    public PostProviderRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public List<Post> listPost()
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_P_LIST)
                                        .setResponseType(List.class)
        );
    }

    @Override
    public Post findPost(String id)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_P_FIND)
                                        .addPathParam("postId", id)
                                        .setResponseType(Post.class)
        );
    }

    @Override
    public String registerPost(PostCdo postCdo)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_P_BUILD)
                                        .setRequestBody(postCdo)
                                        .setResponseType(String.class)
        );
    }
}
