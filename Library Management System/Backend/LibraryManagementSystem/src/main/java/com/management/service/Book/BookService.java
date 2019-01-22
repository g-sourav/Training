package com.management.service.Book;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Entity.BookDetails;
import com.management.repository.BookRepo;

@Service
public class BookService implements BookServiceInterface{

	@Autowired
	BookRepo bookRepo;
	
	public List<BookDetails> getAllBooks() {
		List<BookDetails> list=(List<BookDetails>) bookRepo.findAllOrderBy();
		return list;
	}
	
	public List<BookDetails> getBooks(String searchString){
		if(bookRepo.findAllByBookTitleReturnList(searchString).isEmpty())
			return null;
		else
			return bookRepo.findAllByBookTitleReturnList(searchString);
		
	}
	
	public BookDetails getABook(String bookId) {
		if(bookRepo.findById(bookId).equals(null))
			return null;
		else
			return bookRepo.findById(bookId).get();
	}
	
	public void deleteBook(String bookId) {
		bookRepo.deleteById(bookId);
	}
	
	public boolean addBook(BookDetails book) {
		bookRepo.save(book);
		return true;
	}
	
	public boolean editBook(BookDetails book) {
		bookRepo.save(book);
		return true;
	}

}
