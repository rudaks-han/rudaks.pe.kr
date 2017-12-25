package rudaks.blog.adapter.rest;

import nara.share.restclient.NaraRestClient;
import nara.share.restclient.RequestBuilder;
import rudaks.blog.domain.entity.Category;
import rudaks.blog.domain.spec.CategoryService;

import java.util.List;

public class CategoryServiceRestAdapter implements CategoryService
{
    private NaraRestClient naraRestClient;

    public CategoryServiceRestAdapter(NaraRestClient naraRestClient)
    {
        this.naraRestClient = naraRestClient;
    }

    @Override
    public List<Category> listCategory(String includeCount)
    {
        return naraRestClient.sendAndRecieve(
                        RequestBuilder.create(BlogRestUrl.CATEGORY_S_LIST)
                                .addQueryParam("includeCount", includeCount)
                                .setResponseType(List.class)
        );
    }
}
