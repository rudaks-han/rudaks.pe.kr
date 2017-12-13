package rudaks.blog.sp.spring.web.exception;

public class TokenExpiredException extends RuntimeException
{
	public TokenExpiredException() {}


	public TokenExpiredException(String msg)
	{
		super(msg);
	}
	
}
