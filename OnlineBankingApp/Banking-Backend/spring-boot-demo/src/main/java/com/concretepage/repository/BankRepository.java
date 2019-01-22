package com.concretepage.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.Signup;

public interface BankRepository extends CrudRepository<Signup, Long>  {
	
	
	 List<Signup> findByuid(int uid);

}
