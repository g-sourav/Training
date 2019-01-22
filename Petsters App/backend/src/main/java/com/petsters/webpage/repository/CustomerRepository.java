package main.java.com.petsters.webpage.repository;

import org.springframework.data.repository.CrudRepository;

import main.java.com.petsters.webpage.entity.Customer;



public interface CustomerRepository extends CrudRepository<Customer, Long>{

	

}
