package com.quizapp.service.User;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.SecurityQuestion;
import com.quizapp.entity.User;
import com.quizapp.repository.User.SecurityQuestionRepo;
import com.quizapp.repository.User.UserRepository;

@Service
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
    private SecurityQuestionRepo security;

	public User getUserDetailsByEmail(String userEmail) {
		return userRepo.findByUserEmail(userEmail);
	}
	
	public String getUserPassword(String userEmail) {
		return userRepo.findUserPasswordByUserEmail(userEmail);
		
	}

	public User updateUserDetails(User updatedUser) {
		return userRepo.save(updatedUser);
	}
	
	public User deactivateUserAccount(String userEmail) {
		User tempUser=userRepo.findByUserEmail(userEmail);
		tempUser.setUserStatus(false);
		return userRepo.save(tempUser);
	}

	@Override
	public List<SecurityQuestion> getSecurity() {
		return (List<SecurityQuestion>)security.findAll();
	}

	@Override
	public boolean saveUser(User user) {
		userRepo.save(user);
		return false;
	}

}
