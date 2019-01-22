package main.java.com.petsters.webpage.service;

import java.util.List;

import main.java.com.petsters.webpage.entity.Customer;




public interface CustomerService {
		
	public boolean addCustomer(Customer customer);

    void deleteCustomer(int id);

	public void updateCustomer(Customer customer);

	public List<Customer> getAllCustomers();
}