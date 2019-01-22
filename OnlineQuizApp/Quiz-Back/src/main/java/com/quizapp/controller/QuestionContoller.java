package com.quizapp.controller;

import java.util.List;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;
import com.quizapp.entity.Question;
import com.quizapp.service.Question.QuestionService;

@RestController
@RequestMapping("Question")
public class QuestionContoller {
	@Autowired
	private QuestionService questionService;
	
	Logger log = LoggerFactory.getLogger(QuestionContoller.class);
	
	@PostMapping("/saveQuestions/{quizId}")
	public ResponseEntity<String> saveQuestions(@RequestBody List<Question> questionsList,@PathVariable("quizId") String quizId){
		log.info("Save Questions for Quiz id->{}", quizId);
		log.info("{}",questionsList);
		String quizCode = questionService.addQuestionsList(questionsList, Long.valueOf(quizId));
		return new ResponseEntity<String>(quizCode,HttpStatus.OK);
	}
	@GetMapping("/getQuestions/{quizId}")
	@JsonView(Views.ShowQues.class)
	public List<Question> getQuestionsListByQuizId(@PathVariable("quizId") long quizId){
		log.info("Get questions for quiz->{}", quizId);
		List<Question> questionsList=questionService.getQuestionsListByQuizId(quizId);
		return questionsList;
	}

	@GetMapping("/questionsByQuizCategory/{quizCategory}")
	@JsonView(Views.ShowQues.class)
	public ResponseEntity<Set<Question>> getQuestionByCategory(@PathVariable("quizCategory") String quizCategory) {
		log.info("Get questions by quiz-category->{}",quizCategory);
		Set<Question> questions = questionService.getQuestions(quizCategory);
		return new ResponseEntity<Set<Question>>(questions, HttpStatus.OK);
		
	}
	@GetMapping("/questionById/{questionId}")
	@JsonView(Views.ShowQues.class)
	public ResponseEntity<Question> getQuestion(@PathVariable("questionId") long quizId) {
		log.info("Get questions by QuizId->{}",quizId);
		return new ResponseEntity<Question>(questionService.getQuestionById(quizId), HttpStatus.OK);
		
	}
	@GetMapping("/quizQuestionsByQuizCode/{quizCode}")
	@JsonView(Views.ShowQues.class)
	public ResponseEntity<List<Question>> getQuestionByQuiz(@PathVariable("quizCode") String quizCode) {
		log.info("Get questions by QuizCode->{}",quizCode);
		List<Question> list = questionService.getQuestionsByCode(quizCode);
		return new ResponseEntity<List<Question>>(list, HttpStatus.OK);
	}
	@GetMapping("/quizQuestionsByCreatorIdAndCategory/{creatorId}/{category}")
	@JsonView(Views.ShowQues.class)
	public ResponseEntity<Set<Question>> getQuestionsByCreatorIdAndCategory(@PathVariable("creatorId") long creatorId,@PathVariable("category") String category){
		log.info("Get questions by creatorId->{} and category->{}",creatorId,category);
		Set<Question> questionsList=questionService.getQuestionsByCreatorIdAndCategory(creatorId, category);
		return new ResponseEntity<Set<Question>>(questionsList, HttpStatus.OK);
	}
}
