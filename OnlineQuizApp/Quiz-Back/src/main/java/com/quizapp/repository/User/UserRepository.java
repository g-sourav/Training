package com.quizapp.repository.User;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quizapp.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User,Long>{
	public User findByUserEmail(String email);
	
	@Query("Select DISTINCT u.userName FROM User u where u.userName like %:searchString% and u.userStatus=1")
	List<String> findUsersByUserName(@Param("searchString") String searchString);
	
	@Query("Select u from User u where u.userName=:uName and u.userStatus=1")
	List<User> findAllByUserName(@Param("uName") String userName);
	
	@Query("Select u.userPassword from User u where u.userEmail=:uEmail and u.userStatus=1")
	String findUserPasswordByUserEmail(@Param("uEmail")String userEmail);
	

}
