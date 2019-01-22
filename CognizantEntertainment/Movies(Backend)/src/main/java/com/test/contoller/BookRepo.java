package com.test.contoller;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepo extends CrudRepository<BookTicket, Integer> {
	List<BookTicket> findAllByShows(Show shows); 
}
