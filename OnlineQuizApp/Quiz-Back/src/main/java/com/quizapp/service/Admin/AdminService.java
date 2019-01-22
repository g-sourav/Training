package com.quizapp.service.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.Quiz;
import com.quizapp.entity.User;
import com.quizapp.repository.Quiz.QuizRepository;
import com.quizapp.repository.User.UserRepository;

@Service
public class AdminService implements IAdminService{
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private QuizRepository quizRepo;
	

	public List<String> searchUserNames(String searchString) {
		return userRepo.findUsersByUserName(searchString);
	}

	public List<User> getAllUserDetails(String userName) {
		return userRepo.findAllByUserName(userName);
	}
	
	public List<Quiz> getAllQuizByCategory(String quizCategory) {
		return quizRepo.findByQuizCategory(quizCategory);
	}

	public List<Quiz> getAllQuizDetails() {
		return (List<Quiz>) quizRepo.findAll();
	}

	@Override
	public List<String> getAllQuizCategory() {
		return quizRepo.findDistinctQuizCategory();
	}
	
	

}
