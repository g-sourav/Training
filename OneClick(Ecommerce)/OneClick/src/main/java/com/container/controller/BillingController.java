package com.container.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.container.entity.productdetails;
import com.container.entity.userdetails;
import com.container.service.IBillingService;


@Controller 
@RequestMapping("bill")
@CrossOrigin(origins = "http://10.223.99.44:8080")
public class BillingController {

	@Autowired
	private IBillingService billingservice;
	@GetMapping("finalproduct/{productId}")
	public ResponseEntity<List<productdetails>> getFinalProductById(@PathVariable("productId") String productId){
		List<productdetails> finalproduct= billingservice.getfinalProductsById(productId);
		return new ResponseEntity<List<productdetails>>(finalproduct, HttpStatus.OK);
	}
	@GetMapping("user/{userName}")
	public ResponseEntity <userdetails> getuserById(@PathVariable("userName") String userName){
		userdetails userdetail= billingservice.getuserById(userName);
		return new ResponseEntity<userdetails>(userdetail, HttpStatus.OK);
		
	}
	
	

}
