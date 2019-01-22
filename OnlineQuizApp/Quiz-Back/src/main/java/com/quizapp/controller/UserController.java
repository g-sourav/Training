package com.quizapp.controller;

import java.io.IOException;
import java.util.List;

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
import com.quizapp.entity.SecurityQuestion;
import com.quizapp.entity.User;
import com.quizapp.service.User.IUserService;

@RestController
@RequestMapping("User")
public class UserController {
	
	Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private IUserService userService;
	
	//Login Part
	
	@PostMapping("login")
	@JsonView(Views.ShowUser.class)
	public User signup(@RequestBody User user) throws IOException{
		log.info("Signup user->{}", user);
		user.setUserStatus(true);
		userService.saveUser(user);
		return user;
	}
	
	@PostMapping("auth")
	@JsonView(Views.ShowUser.class)
	public ResponseEntity<User> AuthLogin(@RequestBody User user) {
		log.info("Login user->{}",user);
		User dbUser = userService.getUserDetailsByEmail(user.getUserEmail());
		if (dbUser == null||!dbUser.isUserStatus()) {
			return new ResponseEntity<User>(user, HttpStatus.CONFLICT);
		} else {
			if (user.getUserPassword().equals(dbUser.getUserPassword()))
				return new ResponseEntity<User>(dbUser, HttpStatus.OK);
			else
				return new ResponseEntity<User>(user, HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("securityquestion")
	public List<SecurityQuestion> getSecurity(){
		log.info("Getting Securityquestions");
		return userService.getSecurity();
	}
	
	
	
	
	//Details Part
	
	@GetMapping("getUserDetails/{userEmail}")
	@JsonView(Views.ShowUser.class)
	public ResponseEntity<User> getUserDetailsByEmail(@PathVariable("userEmail") String userEmail) {
		log.info("UserDetailsFor->{}", userEmail);
		User foundUser=userService.getUserDetailsByEmail(userEmail);
		if(foundUser.equals(null))
			return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<User>(foundUser,HttpStatus.OK);
	}
	
	@GetMapping("getUserQuizDetailsByEmail/{userEmail}")
	@JsonView(Views.ShowQuiz.class)
	public User getUserQuizDetailsByEmail(@PathVariable("userEmail") String userEmail) {
		log.info("UserQuizDetailsFor->{}", userEmail);
		User foundUser=userService.getUserDetailsByEmail(userEmail);
		return foundUser;
	}
	
	@GetMapping("getUserPassword/{userEmail}")
	public String getUserPassword(@PathVariable("userEmail") String userEmail) {
		log.info("UserPasswordFor->{}", userEmail);
		return userService.getUserPassword(userEmail);
		
	}
	
	@PostMapping("updateUserPassword")
	public ResponseEntity<Void> updateUserPassword(@RequestBody User updatedUser) {
		log.info("Update password for user->{}",updatedUser.getUserEmail());
		User checkuser=userService.updateUserDetails(updatedUser);
		if(checkuser.equals(null))
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping("updateUserDetails")
	public ResponseEntity<Void> updateUserDetails(@RequestBody User updatedUser) {
		log.info("Update details for user->{}",updatedUser.getUserEmail());
		User checkuser=userService.updateUserDetails(updatedUser);
		if(checkuser.equals(null))
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@RequestMapping("deactivateUserAccount/{userEmail}")
	public ResponseEntity<Void> deactivateUserAccount(@PathVariable("userEmail") String userEmail) {
		log.info("Deactivating account For->{}", userEmail);
		User userCheck = userService.deactivateUserAccount(userEmail);
		if (userCheck.equals(null))
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
}
