package com.container.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.container.entity.productdetails;
import com.container.entity.userdetails;
import com.container.repository.LoginRepository;
import com.container.repository.repository;
@Service
public class BillingService implements IBillingService {
	@Autowired
	repository repobilling;
	@Autowired
	LoginRepository repouser;
	@Override
	public List<productdetails> getfinalProductsById(String productId) {
		List<productdetails> finalproduct= new ArrayList<>(); 
		productdetails data=repobilling.findById(productId).get();
	    finalproduct.add(data);
		return finalproduct;
	}
	@Override
	public userdetails getuserById(String userName) {
		userdetails user= repouser.findById(userName).get();
		return user;
	}
	
}
