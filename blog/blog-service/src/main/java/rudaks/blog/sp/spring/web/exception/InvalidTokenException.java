package rudaks.blog.sp.spring.web.exception;

public class InvalidTokenException extends RuntimeException
{
	public InvalidTokenException() {}

	public InvalidTokenException(String msg)
	{
		super(msg);
	}
	
}
