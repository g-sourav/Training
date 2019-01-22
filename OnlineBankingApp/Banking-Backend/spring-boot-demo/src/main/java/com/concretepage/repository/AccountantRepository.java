package com.concretepage.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.Signup;
import com.concretepage.entity.Transactions;

public interface AccountantRepository extends CrudRepository<Signup, Integer> {

	Signup findByuid(int uid);
	

}
