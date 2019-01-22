package com.container.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.container.entity.cartdetails;
import com.container.repository.CartRepository;

@Service
public class CartService implements ICartService {
	
	@Autowired
	private CartRepository cartrepo;

	@Override
	public List<cartdetails> getCartProducts(String cartid) {
		List<cartdetails> cartlist=new ArrayList<>();
		cartrepo.findByCartid(cartid).forEach(e -> cartlist.add(e));
		return cartlist;
	}
	
	

}
