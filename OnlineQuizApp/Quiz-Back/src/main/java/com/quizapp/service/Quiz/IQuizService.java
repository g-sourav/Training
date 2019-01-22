package com.quizapp.service.Quiz;

import java.util.List;

import com.quizapp.entity.Quiz;

public interface IQuizService {
	
	public List<Quiz> getAllQuizDetails();
	public Quiz saveQuizDetailsService(Quiz quiz);
	public List<Quiz> getUserQuizDetails(String email);

}
