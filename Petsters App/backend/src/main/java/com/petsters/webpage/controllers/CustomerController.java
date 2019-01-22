package main.java.com.petsters.webpage.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import main.java.com.petsters.webpage.entity.Customer;
import main.java.com.petsters.webpage.service.CustomerService;
//@CrossOrigin(origins="https://localhost:4200")
@Controller
@RequestMapping("user")
public class CustomerController {
	@Autowired
	private CustomerService customerservice;
	
	@PostMapping("customer")
	public ResponseEntity<Void> addCustomer(@RequestBody Customer customer) {
        boolean flag = customerservice.addCustomer(customer);
        System.out.println(customer.getAddress());
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
       
        return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@DeleteMapping("customer/{id}")
	public ResponseEntity<Void> deleteArticle(@PathVariable("id") Integer id) {
		customerservice.deleteCustomer(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("update")
	public ResponseEntity<Customer> updateCustomer(@RequestBody Customer customer) {
		customerservice.updateCustomer(customer);
		return new ResponseEntity<Customer>(customer, HttpStatus.OK);
	}
	
	@GetMapping("list")
	public ResponseEntity<List<Customer>> getAllCustomers() {
		List<Customer> list = customerservice.getAllCustomers();
		return new ResponseEntity<List<Customer>>(list, HttpStatus.OK);
	}
} 