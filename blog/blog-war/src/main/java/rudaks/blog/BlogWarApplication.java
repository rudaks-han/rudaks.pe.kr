package rudaks.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class BlogWarApplication extends SpringBootServletInitializer {
	//
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		//
		return application
				.properties(
						"spring.config.location:classpath:/metro.properties,classpath:/common.properties"
				)
				.sources(BlogWarApplication.class);
	}

	public static void main(String[] args) {
		//
		SpringApplication.run(SpringApplicationBuilder.class, args);
	}

    /*@Bean
    public PasswordEncoder passwordEncoder() {
        //
        return new BCryptPasswordEncoder();
    }*/
}
