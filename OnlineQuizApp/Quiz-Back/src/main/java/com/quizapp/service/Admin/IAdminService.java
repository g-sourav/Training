package com.quizapp.service.Admin;

import java.util.List;

import com.quizapp.entity.Quiz;
import com.quizapp.entity.User;

public interface IAdminService {
	
	public List<Quiz> getAllQuizByCategory(String quizCategory);
	public List<String> searchUserNames(String searchString);
	public List<User> getAllUserDetails(String userName);
	public List<Quiz> getAllQuizDetails();
	public List<String> getAllQuizCategory();
}
