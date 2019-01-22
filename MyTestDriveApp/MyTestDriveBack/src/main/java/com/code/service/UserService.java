package com.code.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.code.Entity.Booking;
import com.code.Entity.User;
import com.code.Entity.carDetails;
import com.code.Entity.location;
import com.code.repository.BookingRepository;
import com.code.repository.UserRepository;
import com.code.repository.carRepository;
import com.code.repository.locationRepository;
@Service
public class UserService implements UserServiceInterface {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private locationRepository locationRepository;
	@Autowired
	private carRepository carRepository;
	@Autowired
	private BookingRepository bookRepository;
	
	public List<User> getAllUser(){
		List<User> list = new ArrayList<>();
		userRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	public synchronized boolean addUser(User user){
		List<User> list = userRepository.findByUserNameAndPassword(user.getUserName(), user.getPassword()); 	
	       if (list.size() > 0) {
	    	   return false;
	       } else {
	    	   userRepository.save(user);
	    	   return true;
	       }
	  
	}
	public int validateUser(User user){
		List<User> list = userRepository.findByUserName(user.getUserName());
		if (!list.isEmpty())
		{
			if(user.getPassword().equals(list.get(0).getPassword()))
				return 0;
			else
				return 5;
	    } 
		else 
		{
	    	   return -5;
	    }
	}
	public List<location> getAllLocation(){
		
		return (List<location>) locationRepository.findAll();
	}
	@Override
	public carDetails getcarDet(String carName) {
		return carRepository.findCarDetailsByCarName(carName);
	}
	@Override
	public List<User> getName(String name){
		return userRepository.findByUserName(name);
	}
		@Override
	public void addbooking(Booking booking) {
		bookRepository.save(booking);
	}
	  
		public void updatePassword(User user) {	
			User list=userRepository.findUserByEmailId(user.getEmailId());
			list.setPassword(user.getPassword());
	    	   userRepository.save(list);

			
		}
		
}
