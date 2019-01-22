package com.code.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.code.Entity.User;



	public interface UserRepository extends CrudRepository<User, Integer>  {
		List<User> findByUserNameAndPassword(String UserName,String Password);
	    List<User> findByUserName(String UserName);
	    User findUserByEmailId(String emailId);
	}

