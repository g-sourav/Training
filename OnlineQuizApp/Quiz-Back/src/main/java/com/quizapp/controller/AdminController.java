package com.quizapp.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;
import com.quizapp.entity.Quiz;
import com.quizapp.entity.User;
import com.quizapp.service.Admin.IAdminService;
import com.quizapp.service.User.IUserService;

@RestController
@RequestMapping("Admin")
public class AdminController {

	Logger log = LoggerFactory.getLogger(AdminController.class);

	@Autowired
	private IAdminService adminService;
	
	@Autowired
	private IUserService userService;

	@GetMapping("searchUserNames/{searchString}")
	public ResponseEntity<List<String>> searchUserNames(@PathVariable("searchString") String searchString) {
		log.info("Search for Users by UserName->{}", searchString);
		List<String> userList = adminService.searchUserNames(searchString);
		return new ResponseEntity<List<String>>(userList, HttpStatus.OK);
	}

	@GetMapping("getAllUserDetails/{userName}")
	@JsonView(Views.ShowUser.class)
	public ResponseEntity<List<User>> getAllUserDetails(@PathVariable("userName") String userName) {
		log.info("UserDetailsFor->{}", userName);
		List<User> userList = adminService.getAllUserDetails(userName);
		return new ResponseEntity<List<User>>(userList, HttpStatus.OK);
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
	
	@GetMapping("getAllQuizByCategory/{quizCategory}")
	@JsonView(Views.ShowQuiz.class)
	public ResponseEntity<List<Quiz>>getAllQuizByCategory(@PathVariable("quizCategory") String quizCategory) {
		log.info("Get quiz by category->{}",quizCategory);
	    List<Quiz> quizList = adminService.getAllQuizByCategory(quizCategory);
		if(quizList.isEmpty())
			return new ResponseEntity<List<Quiz>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<Quiz>>(quizList,HttpStatus.OK);
	}
	
	@GetMapping("getAllQuizDetails")
	@JsonView(Views.ShowQuiz.class)
	public ResponseEntity<List<Quiz>> getAllQuizDetails() {
		log.info("Get all quizDeatils->Admin");
		List<Quiz> quizList=adminService.getAllQuizDetails();
		if(quizList.isEmpty())
			return new ResponseEntity<List<Quiz>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<Quiz>>(quizList,HttpStatus.OK);
	}
	@GetMapping("getAllQuizCategory")
	@JsonView(Views.ShowQuiz.class)
	public ResponseEntity<List<String>> getAllQuizCategory() {
		log.info("Get all quizCategory->Admin");
		List<String> quizCategory=adminService.getAllQuizCategory();
		if(quizCategory.isEmpty())
			return new ResponseEntity<List<String>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<String>>(quizCategory,HttpStatus.OK);
	}

}
