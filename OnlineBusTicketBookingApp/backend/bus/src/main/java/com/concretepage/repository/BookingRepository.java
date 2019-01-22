package com.concretepage.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.BookingTable;

public interface BookingRepository extends CrudRepository<BookingTable,Long > {
	 
	List<BookingTable>      findByMailId(String EmailId);
	Optional<BookingTable>  findByTicketNumber(long TktNo);

	List<BookingTable> findByMailIdAndSeatNumber(String emailId, String seatNumber);

	
	
	
	
     	
	

}
