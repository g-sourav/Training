package com.quizapp.service.Quiz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.Quiz;
import com.quizapp.entity.User;
import com.quizapp.repository.Quiz.QuizRepository;
import com.quizapp.repository.User.UserRepository;

@Service
public class QuizService implements IQuizService {

	@Autowired
	private QuizRepository quizRepo;
	@Autowired
	private UserRepository userRepo;
	
	
	public List<Quiz> getAllQuizDetails() {
		return (List<Quiz>)quizRepo.findAll();
	}

	public List<Quiz> getUserQuizDetails(String email) {
		return (List<Quiz>)quizRepo.findByUsers(userRepo.findByUserEmail(email));
	}

	@Override
	public Quiz saveQuizDetailsService(Quiz quiz) {
		return quizRepo.save(quiz);
	}
	
	
	
	

}
