package rudaks.blog.sp.spring.web.exception;

public class AccessDeniedException extends RuntimeException
{
	public AccessDeniedException() {}


	public AccessDeniedException(String msg)
	{
		super(msg);
	}
	
}
