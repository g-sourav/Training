package com.quizapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Helper.RandomCodeGenerator;
import com.quizapp.Views.Views;
import com.quizapp.entity.Quiz;
import com.quizapp.entity.UserAnswers;
import com.quizapp.service.Answers.AnswerService;
import com.quizapp.service.Quiz.IQuizService;

@RestController
@RequestMapping("Quiz")
public class QuizController {
	
	Logger log = LoggerFactory.getLogger(QuizController.class);
	
	@Autowired
	private IQuizService quizService;
	
	@Autowired
	private AnswerService answerService;
	
	@GetMapping("getAllQuiz")
	@JsonView(Views.ShowQuiz.class)
	public List<Quiz> getAllQuizDetails() {
		log.info("Get all Quiz->Quiz");
		return quizService.getAllQuizDetails();

	}	
	
	@GetMapping("/getUserQuizDetails/{email}")
	@JsonView(Views.ShowQuiz.class)
	public List<Quiz> getUserQuiz(@PathVariable("email") String email) {
		log.info("Get user Quiz->{}",email);
		return quizService.getUserQuizDetails(email);
	}
	
	//Create quiz
	
	@PostMapping("save")
	@JsonView(Views.ShowQuiz.class)
	public Quiz saveQuizDetails(@RequestBody Quiz createQuiz)
	{
		log.info("Save quiz with creator->{} and quiz->{}",createQuiz.getCreatorId(),createQuiz);
		createQuiz.setQuizCode(RandomCodeGenerator.getAlphaNumericString(5));
		Quiz cQuiz = quizService.saveQuizDetailsService(createQuiz);
		return cQuiz;
	}
	
	@PostMapping("saveAnswersList")
	public int saveAnswerList(@RequestBody List<UserAnswers> userAnswers){
		log.info("Save UserAnswers for user->{} and quiz->{}",userAnswers.get(0).getUserId(),userAnswers.get(0).getQuizId());
		return answerService.addAnswersList(userAnswers);
		
	}
	
}
