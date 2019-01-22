package com.concretepage.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.CustomerDetails;
import com.concretepage.entity.SeatsList;

public interface SeatsRepository extends CrudRepository<SeatsList, Long>  {
 
	
	           List<SeatsList> findBySeatNumber(int seatNumber);
}

