package rudaks.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.filter.CharacterEncodingFilter;

import javax.servlet.Filter;

@SpringBootApplication
@EnableCaching
public class BlogApplication {
	//
	public static void main(String[] args) {
		//
		SpringApplication.run(BlogApplication.class, args);
	}

	@Order(Ordered.HIGHEST_PRECEDENCE)
	@Bean
	public Filter characterEncodingFilter() {
		CharacterEncodingFilter filter = new CharacterEncodingFilter();
		filter.setEncoding("UTF-8");
		filter.setForceEncoding(true);
		return filter;
	}


}
