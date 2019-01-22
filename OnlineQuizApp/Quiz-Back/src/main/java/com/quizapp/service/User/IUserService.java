package com.quizapp.service.User;

import java.util.List;

import com.quizapp.entity.SecurityQuestion;
import com.quizapp.entity.User;

public interface IUserService {
	
	User getUserDetailsByEmail(String userEmail);
	User updateUserDetails(User updatedUser);
	String getUserPassword(String userEmail);
	User deactivateUserAccount(String email);
	List<SecurityQuestion> getSecurity();
	boolean saveUser(User user);
}
