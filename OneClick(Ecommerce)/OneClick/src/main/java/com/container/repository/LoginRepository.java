package com.container.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.container.entity.userdetails;

public interface LoginRepository extends CrudRepository<userdetails, String>  {
	
   userdetails findByUserNameAndPassword(String userName,String password);
   
   List<userdetails> findByUserName(String userName);

}
