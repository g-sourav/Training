package com.quizapp.controller;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ErrorPage implements ErrorController {
	Logger log = LoggerFactory.getLogger(ErrorPage.class);
	
	@Override
	public String getErrorPath() {
		return "/error";
	}
	@RequestMapping("error")
	public String handleError(HttpServletRequest request){
		Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
		log.info("Error with status->{}",status);
		if(status != null){
			   Integer statusCode = Integer.valueOf(status.toString());
			     
		        if(statusCode == HttpStatus.NOT_FOUND.value()) {
		            return "Page not Found";
		        }
		        else if(statusCode == HttpStatus.INTERNAL_SERVER_ERROR.value()) {
		            return "Internal Server Error";
		        }
		}
		return "Fatal Error";
	}

}
