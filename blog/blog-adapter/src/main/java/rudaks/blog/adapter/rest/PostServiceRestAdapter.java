package rudaks.blog.adapter.rest;

import nara.share.domain.NameValueList;
import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Post;
import rudaks.blog.domain.spec.PostService;
import rudaks.blog.domain.spec.sdo.PostCdo;

import java.util.List;

public class PostServiceRestAdapter implements PostService
{
    private NaraRestClient naraRestClient;

    public PostServiceRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public List<Post> listPostByCategory(String category, int offset) {
        return naraRestClient.sendAndRecieve(
                RequestBuilder.create(BlogRestUrl.POST_P_LIST)
                        .addQueryParam("offset", offset)
                        .addQueryParam("category", category)
                        .setResponseType(List.class)
        );
    }

    @Override
    public Post findPost(String id)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_S_FIND)
                                        .addPathParam("postId", id)
                                        .setResponseType(Post.class)
        );
    }

    @Override
    public String registerPost(PostCdo postCdo)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_S_BUILD)
                                        .setRequestBody(postCdo)
                                        .setResponseType(String.class)
        );
    }

    @Override
    public void modifyPost(String id, NameValueList nameValueList)
    {
        naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_S_MODIFY)
                                        .addPathParam("postId", id)
                                        .setRequestBody(nameValueList)
        );
    }

    @Override
    public void deletePost(String id)
    {
        naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.POST_S_REMOVE)
                                        .addPathParam("postId", id)
        );
    }
}
