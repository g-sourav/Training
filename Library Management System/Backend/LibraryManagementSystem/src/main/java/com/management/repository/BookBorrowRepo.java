package com.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.management.Entity.BooksBorrowed;

public interface BookBorrowRepo extends CrudRepository<BooksBorrowed, Integer> {

	@Query("select b from BooksBorrowed b where b.borrowerEmail= :email order by b.status desc")
	public List<BooksBorrowed> findAllByBorrowerEmail(@Param("email") String email);
	
}
