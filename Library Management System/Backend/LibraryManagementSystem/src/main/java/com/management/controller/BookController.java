package com.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.Entity.BookDetails;
import com.management.service.Book.BookServiceInterface;

@RestController
@RequestMapping("book")
public class BookController {
	
	@Autowired
	BookServiceInterface bookService;
	
	@GetMapping("getAllBooks")
	public ResponseEntity<List<BookDetails>> getAllBooks() {
		List<BookDetails> books =bookService.getAllBooks();
		if(books.isEmpty())
			return new ResponseEntity<List<BookDetails>>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<List<BookDetails>>(books,HttpStatus.OK);
	}
	
	@GetMapping("getABook/{id}")
	public ResponseEntity<BookDetails> getABook(@PathVariable("id") String id) {
		BookDetails book=bookService.getABook(id);
		if(book.equals(null))
			return new ResponseEntity<BookDetails>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<BookDetails>(book,HttpStatus.OK);
		
	}
	
	@GetMapping("getBooks/{searchString}")
	public ResponseEntity<List<BookDetails>> getBooks(@PathVariable("searchString") String searchString) {
		List<BookDetails> books=bookService.getBooks(searchString);
		if(books.isEmpty())
			return new ResponseEntity<List<BookDetails>>(HttpStatus.NO_CONTENT);
		else
			return new ResponseEntity<List<BookDetails>>(books,HttpStatus.OK);
	}
	
	@DeleteMapping("deleteBook/{bookId}")
	public ResponseEntity<Void> deleteBook(@PathVariable("bookId") String bookId) {
		System.out.println("in deleteBook");	
		bookService.deleteBook(bookId);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping("addBook")
	public ResponseEntity<Void> addBook(@RequestBody BookDetails book) {
		System.out.println("in addBook");	
		bookService.addBook(book);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping("editBook")
	public ResponseEntity<Void> editBook(@RequestBody BookDetails book) {
		System.out.println("in addBook");	
		bookService.editBook(book);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
