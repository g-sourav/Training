package com.management.repository;
import org.springframework.data.repository.query.Param;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.management.Entity.BookDetails;

public interface BookRepo extends CrudRepository<BookDetails, String>  {
	
	@Query(" select b from BookDetails b where b.bookTitle like %:searchString% order by b.bookTitle")
	public List<BookDetails> findAllByBookTitleReturnList(@Param("searchString") String searchString);
	
	@Query(" select b from BookDetails b order by b.bookTitle")
	public List<BookDetails> findAllOrderBy();
	
}
