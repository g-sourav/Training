package com.quizapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;
import com.quizapp.entity.Results;
import com.quizapp.service.Results.IResultService;

@RestController
@RequestMapping("Result")
public class ResultController {
	Logger log = LoggerFactory.getLogger(ResultController.class);
	
	@Autowired
	private IResultService resultService;
	
	@GetMapping("getQuizResult/{email}/{quizId}")
	@JsonView(Views.ShowQuiz.class)
	public Results getUserResults(@PathVariable("email") String email,@PathVariable("quizId") long quizId) {
		log.info("Get result for user->{} and quiz->{}",email,quizId);
		return resultService.getResultByQuiz(email,quizId).get(0);
		
	}

}
