package com.container.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.container.entity.productdetails;
import com.container.repository.repository;

@Service
public class ProductService implements IProductService{
	@Autowired
	private repository Mobilerepo;

	@Override
	public List<productdetails> getProducts(String categoryId) {
		List<productdetails> moblist=new ArrayList<>();
		Mobilerepo.findByCategoryId(categoryId).forEach(e -> moblist.add(e));
		System.out.println();
		return moblist;
	}

	@Override
	public List<productdetails> getAllProducts() {
		List<productdetails> allmoblist = new ArrayList<>();
		Mobilerepo.findAll().forEach(e -> allmoblist.add(e));
		return allmoblist;
	}
	
	@Override
	public List<productdetails> getProduct(String ProductId) {
		List<productdetails> mobile=new ArrayList<>();
		productdetails data=Mobilerepo.findById(ProductId).get();
		mobile.add(data);
		return mobile;
	}
	

}
