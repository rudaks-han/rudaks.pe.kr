package nara.share.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 쿠키 관련 클래스.
 *
 * @author kmhan
 */
public class CookieUtil
{
    /** 쿠키유지설정. */
    private static int maxAge = 60*60*24*1000;

	/**
	 * 쿠키값을 세팅한다.
	 *
	 * @param response HttpServletResponse 객체.
	 * @param name 쿠키명.
	 * @param value 쿠키값.
	 * @param iMaxAge 유지시간.
	 *
	 * @throws Exception the exception
	 */
    public static void setCookie(HttpServletResponse response, String name, String value, int iMaxAge)
            throws Exception
    {
    	String cookieValue = null;
    	cookieValue = (value == null) ? "" : java.net.URLEncoder.encode(value,"UTF-8");
        Cookie cookie = new Cookie(name, cookieValue);
        cookie.setMaxAge(iMaxAge);
        response.addCookie(cookie);
    }

    /**
	 * 쿠키값을 세팅한다.
     *
     * @param response HttpServletResponse 객체.
	 * @param name 쿠키명.
	 * @param value 쿠키값.
     *
     * @throws Exception the exception
     */
    public static void setCookie(HttpServletResponse response, String name, String value)
    throws Exception
    {
        setCookie(response, name, value, maxAge);
    }

	/**
	 * <pre>
	 * 쿠키값을 세팅한다.
	 * -uri 정보 포함
	 * </pre>
	 *
	 * @param response HttpServletResponse 객체.
	 * @param name 쿠키명.
	 * @param value 쿠키값.
	 * @param uri 관련uri.
	 * @param iMaxAge 유지시간.
	 *
	 * @throws Exception the exception
	 */
    public static void setCookie(HttpServletResponse response, String name, String value,String uri, int iMaxAge)
            throws Exception
    {
    	String cookieValue = null;
    	cookieValue = (value == null) ? "" : java.net.URLEncoder.encode(value,"UTF-8");
        Cookie cookie = new Cookie(name, cookieValue);
        cookie.setPath(uri);
        cookie.setMaxAge(iMaxAge);
        response.addCookie(cookie);
    }

    /**
	 * <pre>
	 * 쿠키값을 세팅한다.
	 * -uri 정보 포함
	 * </pre>
     *
     * @param response HttpServletResponse 객체.
	 * @param name 쿠키명.
	 * @param value 쿠키값.
	 * @param uri 관련uri.
     *
     * @throws Exception the exception
     */
    public static void setCookie(HttpServletResponse response, String name, String value,String uri)
        throws Exception
    {
        setCookie(response, name, value, uri, maxAge);
    }


	/**
	 * 생성된 쿠키값을 가져온다.
	 *
	 * @param request HttpServletRequest 객체.
	 * @param cookieName 쿠키명.
	 *
	 * @return 쿠키값.
	 *
	 * @throws Exception the exception
	 */
    public static String getCookie(HttpServletRequest request, String cookieName)
            throws Exception
    {
        Cookie [] cookies = request.getCookies();
        String value = null;
        if( cookies != null )
        {
            for(int i=0;i<cookies.length;i++)
            {
                if(cookieName.equals(cookies[i].getName()))
                {
                    value = java.net.URLDecoder.decode(cookies[i].getValue(),"UTF-8");
                    break;
                }
            }
        }
        return value;
    }

    /**
	 * 생성된 쿠키값을 가져온다.
     *
     * @param request HttpServletRequest 객체.
     * @param cookieName 쿠키명.
     * @param itemName 키.
     *
     * @return 쿠키값.
     *
     * @throws Exception the exception
     */
    public static String getCookieByList(HttpServletRequest request, String cookieName, String itemName) throws Exception
    {
    	return getCookieByList(request, cookieName, itemName, ",");
    }

    /**
	 * 생성된 쿠키값을 가져온다.
     *
     * @param request HttpServletRequest 객체.
     * @param cookieName 쿠키명.
     * @param itemName 키.
     * @param separator 구분자.
     *
     * @return 쿠키값.
     *
     * @throws Exception the exception
     */
    public static String getCookieByList(HttpServletRequest request, String cookieName, String itemName, String separator)
    throws Exception
	{
		Cookie [] cookies = request.getCookies();
		String value = null;
		if( cookies != null )
		{
		    for(int i=0;i<cookies.length;i++)
		    {
		        if(cookieName.equals(cookies[i].getName()))
		        {
		            String list = java.net.URLDecoder.decode(cookies[i].getValue(),"UTF-8");
		            String [] arList = list.split(separator);
		            for (int j=0; j<arList.length; j++)
		            {
		            	String [] arItem = arList[j].split("=");
		            	if (arItem != null && arItem.length == 2 && arItem[0].equals(itemName))
		            	{
		            		value = arItem[1];
		            		break;
		            	}
		            }
		            break;
		        }
		    }
		}
		return value;
	}

    
    public static void main(String [] args) throws Exception
    {
    	//String value = CryptoUtil.encrypt(WebPublic.SHA_SALT_KEY, "31");
    	//System.err.println(value);
    }

}