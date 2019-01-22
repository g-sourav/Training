package com.container.service;

import java.util.List;

import com.container.entity.productdetails;
import com.container.entity.userdetails;

public interface IBillingService {
	List<productdetails> getfinalProductsById(String productId);
    userdetails getuserById(String userName);
}

