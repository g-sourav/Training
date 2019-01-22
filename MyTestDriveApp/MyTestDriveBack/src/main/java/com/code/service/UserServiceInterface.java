package com.code.service;

import java.util.List;

import com.code.Entity.Booking;
import com.code.Entity.User;
import com.code.Entity.carDetails;
import com.code.Entity.location;

public interface UserServiceInterface {
      List<User> getAllUser();
     boolean addUser(User user);
     int validateUser(User user);
	List<location> getAllLocation();
	carDetails getcarDet(String carName);
	List<User> getName(String name);
	void addbooking(Booking booking);
	void updatePassword(User user);
}
