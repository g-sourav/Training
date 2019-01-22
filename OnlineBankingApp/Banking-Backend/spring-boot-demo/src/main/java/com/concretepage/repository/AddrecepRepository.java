package com.concretepage.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.Addrecepient;

public interface AddrecepRepository  extends CrudRepository<Addrecepient, Long>  {
	
	
	 //List<Addrecepient> findByrid(int accno);

}
