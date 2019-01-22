package com.container.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.container.entity.cartdetails;

public interface CartRepository extends CrudRepository<cartdetails, String>{

	
		List<cartdetails> findByCartid(String cartid);
		
	

}
