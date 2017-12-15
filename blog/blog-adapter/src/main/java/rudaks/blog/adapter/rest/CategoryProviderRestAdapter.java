package rudaks.blog.adapter.rest;

import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.CategoryProvider;

import java.util.List;

public class CategoryProviderRestAdapter implements CategoryProvider
{
    private NaraRestClient naraRestClient;

    public CategoryProviderRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public List<Category> listCategory()
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.CATEGORY_P_LIST)
                                        .setResponseType(List.class)
        );
    }
}
