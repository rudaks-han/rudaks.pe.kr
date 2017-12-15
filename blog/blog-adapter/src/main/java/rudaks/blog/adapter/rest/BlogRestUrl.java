package rudaks.blog.adapter.rest;

import nara.share.restclient.HttpMethod;
import nara.share.restclient.NaraRestUrl;

public enum BlogRestUrl implements NaraRestUrl
{
    CATEGORY_S_LIST                 ("api/s/categories",                            HttpMethod.GET),
    CATEGORY_P_LIST                 ("api/p/categories",                            HttpMethod.GET),

    POST_S_BUILD                    ("api/s/posts",                                 HttpMethod.POST),
    POST_S_FIND                     ("api/s/posts/{postId}",                        HttpMethod.GET),
    POST_S_MODIFY                   ("api/s/posts/{postId}",                        HttpMethod.PUT),
    POST_S_REMOVE                   ("api/s/posts/{postId}",                        HttpMethod.DELETE),

    POST_P_BUILD                    ("api/p/posts",                                 HttpMethod.POST),
    POST_P_FIND                     ("api/p/posts/{postId}",                        HttpMethod.GET),
    POST_P_LIST                     ("api/p/posts",                                 HttpMethod.GET),

    GUESTBOOK_S_BUILD               ("api/s/guestbooks",                            HttpMethod.POST),
    GUESTBOOK_S_MODIFY              ("api/s/guestbooks/{guestbookId}",              HttpMethod.PUT),
    GUESTBOOK_S_DELETE              ("api/s/guestbooks/{guestbookId}",              HttpMethod.DELETE),

    GUESTBOOK_P_BUILD               ("api/p/guestbooks",                            HttpMethod.POST),
    GUESTBOOK_P_LIST                ("api/p/guestbooks",                            HttpMethod.GET)

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
