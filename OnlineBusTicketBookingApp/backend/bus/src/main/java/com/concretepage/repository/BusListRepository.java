package com.concretepage.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.BusList;
import com.concretepage.entity.CustomerDetails;

public interface BusListRepository extends CrudRepository<BusList, Long>{
   
	BusList  findByBusNumber(long busNo);
       List<BusList>  findAll();	
	
	
}
