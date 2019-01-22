package com.code.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.code.Entity.Booking;
import com.code.Entity.User;
import com.code.Entity.carDetails;
import com.code.Entity.location;
import com.code.service.UserServiceInterface;
@Controller
@RequestMapping("test-drive")
public class UserController {
	@Autowired
	private UserServiceInterface userserviceinterface;
	@GetMapping("user")
	public ResponseEntity<List<User>> getAllUser() {
		List<User> list = userserviceinterface.getAllUser();
		return new ResponseEntity<List<User>>(list, HttpStatus.OK);
	}
	@PostMapping("user")
	public ResponseEntity<String> addUser(@RequestBody User user) {
		System.out.println(user);
		userserviceinterface.addUser(user);
        	return new ResponseEntity<String>("inserted",HttpStatus.OK);
	}
	@PostMapping("login")
	public ResponseEntity<User> validateUser(@RequestBody User user) {
		System.out.println(userserviceinterface.validateUser(user));
		if(userserviceinterface.validateUser(user)==0){
			User u1 = userserviceinterface.getName(user.getUserName()).get(0);
			return new ResponseEntity<User>(u1, HttpStatus.OK);}
		else if(userserviceinterface.validateUser(user)==5)
			return new ResponseEntity<User>(user,HttpStatus.BAD_REQUEST);
		else
			return new ResponseEntity<User>(user, HttpStatus.CONFLICT);
	}
	@GetMapping("location")
	public ResponseEntity<List<location>> getAllLocation() {
		List<location> list = userserviceinterface.getAllLocation();
		return new ResponseEntity<List<location>>(list, HttpStatus.OK);
	}
	@GetMapping("getCar/{carName}")
	public ResponseEntity<carDetails> getcarDet(@PathVariable("carName")String carName)
	{
		carDetails carDetails=userserviceinterface.getcarDet(carName);
		System.out.println(carName);
		return new ResponseEntity<carDetails>(carDetails,HttpStatus.OK);
	}
	@PostMapping("booking")
	public ResponseEntity<String> addBooking(@RequestBody Booking booking) {
		System.out.println(booking);
		userserviceinterface.addbooking(booking);
        	return new ResponseEntity<String>("inserted",HttpStatus.OK);
	}
	@PutMapping("UpdatePassword")
	public ResponseEntity<User> updatePassword(@RequestBody User user) {
		System.out.println(user);
		userserviceinterface.updatePassword(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
	
}
