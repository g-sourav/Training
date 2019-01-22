package com.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.management.Entity.BorrowerDetails;


public interface BorrowerRepo extends CrudRepository<BorrowerDetails, String>  {
	
}
