package com.quizapp.service.Results;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.Results;
import com.quizapp.repository.Quiz.QuizRepository;
import com.quizapp.repository.Results.ResultsRepository;
import com.quizapp.repository.User.UserRepository;
@Service
public class ResultService implements IResultService {
	
	@Autowired
	ResultsRepository resultRepo;
	
	@Autowired
	QuizRepository quizRepo;
	
	@Autowired
	UserRepository userRepo;

	public List<Results> getResultByQuiz(String email, long quizId) {
		return resultRepo.findByQuizAndUser(quizRepo.findById(quizId).get(), 
				userRepo.findByUserEmail(email));
		
	}

}
