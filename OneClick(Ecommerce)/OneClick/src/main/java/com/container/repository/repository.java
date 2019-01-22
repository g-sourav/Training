package com.container.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.container.entity.productdetails;

public interface repository extends CrudRepository<productdetails,String>{
	List<productdetails> findByCategoryId(String categoryId);
	List<productdetails> findByProductId(String productId);

}
