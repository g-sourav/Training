package com.container.service;

import java.util.List;

import com.container.entity.productdetails;


public interface IProductService {
	 
	List<productdetails> getProducts(String categoryId);

	List<productdetails> getAllProducts();

	List<productdetails> getProduct(String ProductId);
}
