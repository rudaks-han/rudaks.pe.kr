package rudaks.blog.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import rudaks.blog.interceptor.LoginCheckInterceptor;

@Configuration
@EnableWebMvc
public class WebConfig extends WebMvcConfigurerAdapter
{
	@Autowired
	LoginCheckInterceptor loginCheckInterceptor;

	@Override
	public void addViewControllers(ViewControllerRegistry registry)
	{
		registry.addRedirectViewController("/api/v2/api-docs", "/v2/api-docs");
		registry.addRedirectViewController("/api/swagger-resources/configuration/ui", "/swagger-resources/configuration/ui");
		registry.addRedirectViewController("/api/swagger-resources/configuration/security", "/swagger-resources/configuration/security");
		registry.addRedirectViewController("/api/swagger-resources", "/swagger-resources");
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry)
	{
		registry.addResourceHandler("/api/swagger-ui.html**").addResourceLocations("classpath:/META-INF/resources/swagger-ui.html");
		registry.addResourceHandler("/api/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/");
	}

	@Override
	public void addCorsMappings(CorsRegistry registry)
	{
		registry.addMapping("/api/**")
						//.allowedOrigins("http://domain2.com")
						.allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD");
						//.allowedHeaders("Authorization");
						//.exposedHeaders("header1", "header2")
						//.allowCredentials(false).maxAge(3600);
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry)
	{
		registry.addInterceptor(loginCheckInterceptor).addPathPatterns("/api/s/*");
	}
}
