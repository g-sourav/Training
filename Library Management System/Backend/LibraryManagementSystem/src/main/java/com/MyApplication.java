package com;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
@SpringBootApplication
public class MyApplication extends SpringBootServletInitializer{  
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		System.out.println("Library Managment configure method");
		return application.sources(MyApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(MyApplication.class, args);
    }       
}            	