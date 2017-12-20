package rudaks.blog.adapter.rest;

import nara.share.restclient.HttpMethod;
import nara.share.restclient.NaraRestUrl;

public enum BlogRestUrl implements NaraRestUrl
{
    CATEGORY_S_LIST                 ("api/s/categories",                            HttpMethod.GET),

    POST_S_LIST                     ("api/s/posts",                                 HttpMethod.GET),
    POST_S_BUILD                    ("api/s/posts",                                 HttpMethod.POST),
    POST_S_FIND                     ("api/s/posts/{postId}",                        HttpMethod.GET),
    POST_S_MODIFY                   ("api/s/posts/{postId}",                        HttpMethod.PUT),
    POST_S_REMOVE                   ("api/s/posts/{postId}",                        HttpMethod.DELETE),

    GUESTBOOK_S_LIST                ("api/s/guestbooks",                            HttpMethod.GET),
    GUESTBOOK_S_BUILD               ("api/s/guestbooks",                            HttpMethod.POST),
    GUESTBOOK_S_MODIFY              ("api/s/guestbooks/{guestbookId}",              HttpMethod.PUT),
    GUESTBOOK_S_DELETE              ("api/s/guestbooks/{guestbookId}",              HttpMethod.DELETE),

    ;

    private String restUrl;
    private HttpMethod httpMethod;

    BlogRestUrl(String restUrl, HttpMethod httpMethod)
    {
        this.restUrl = restUrl;
        this.httpMethod = httpMethod;
    }

    @Override
    public String getUrl()
    {
        return this.restUrl;
    }

    @Override
    public HttpMethod getMethod()
    {
        return this.httpMethod;
    }
}
