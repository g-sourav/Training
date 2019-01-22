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

import com.container.entity.cartdetails;
import com.container.service.ICartService;



@Controller
@RequestMapping("userCart")
@CrossOrigin(origins = "http://10.223.99.44:8080")
public class CartController {
	
	@Autowired
	private ICartService cartservice;
	@GetMapping("productlist/{cartid}")
	public ResponseEntity<List<cartdetails>>getCartProducts(@PathVariable("cartid") String cartid) {
	    List<cartdetails> cartlist = cartservice.getCartProducts(cartid);
	    
	    
	    
		return new ResponseEntity<List<cartdetails>>(cartlist, HttpStatus.OK);
	}

}
