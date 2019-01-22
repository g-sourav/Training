package com.container.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.container.entity.productdetails;

public interface ProductRepository extends CrudRepository<productdetails, String> {

	List<productdetails> findByCategoryId(String categoryId);
	   
	   productdetails findByProductId(String ProductId);
}
