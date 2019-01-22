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
import com.container.service.IProductService;


@Controller
@RequestMapping("electronicsM")
@CrossOrigin(origins = "http://10.223.99.44:8080")
public class ProductController	 {
	@Autowired
	private IProductService proservice;
	@GetMapping("productlist/{categoryId}")
	public ResponseEntity<List<productdetails>>getProducts(@PathVariable("categoryId") String categoryId) {
	    List<productdetails> productlist = proservice.getProducts(categoryId);
	    
	    
	    
		return new ResponseEntity<List<productdetails>>(productlist, HttpStatus.OK);
	}
	
	
	@GetMapping("product/{productId}")
	public ResponseEntity<List<productdetails>> getMobileById(@PathVariable("productId") String productId) {
	    List<productdetails> product = proservice.getProduct(productId);
	    return new ResponseEntity<List<productdetails>>(product, HttpStatus.OK);
	}
	

	@GetMapping("product")
	public ResponseEntity<List<productdetails>>getAllMobileProducts() {
	    List<productdetails> allproductlist = proservice.getAllProducts();
		return new ResponseEntity<List<productdetails>>(allproductlist, HttpStatus.OK);
	}

}
