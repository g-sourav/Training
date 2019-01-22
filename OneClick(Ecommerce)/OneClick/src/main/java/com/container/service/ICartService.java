package com.container.service;

import java.util.List;

import com.container.entity.cartdetails;

public interface ICartService {
	
	List<cartdetails> getCartProducts(String cartid);

}
