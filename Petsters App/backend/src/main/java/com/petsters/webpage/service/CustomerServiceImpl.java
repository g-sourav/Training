package main.java.com.petsters.webpage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.java.com.petsters.webpage.entity.Customer;
import main.java.com.petsters.webpage.repository.CustomerRepository;


@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository customerRepository;
	
	public Customer getCustomerById(long id) {
		Customer obj = customerRepository.findById(id).get();
		return obj;
	}
	
	

	public  boolean addCustomer(Customer customer) {
		 
		 customerRepository.save(customer);
	    	   return true;
	       }
		

	public void deleteCustomer(int id) {
		customerRepository.delete(getCustomerById(id));
	}



	public void updateCustomer(Customer customer) {
		customerRepository.save(customer);
	}



	public List<Customer> getAllCustomers(){
		List<Customer> list = new ArrayList<>();
		customerRepository.findAll().forEach(e -> list.add(e));
		return list;

	}





}