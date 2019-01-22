package com.management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.Entity.BooksBorrowed;
import com.management.service.BookBorrow.BookBorrowServiceInterface;

@RestController
@RequestMapping("/bookBorrow")
public class BookBorrowController {

	@Autowired
	BookBorrowServiceInterface bookBorrowService;
	
	@PostMapping("/borrowBook")
	public ResponseEntity<Void> borrowBook(@RequestBody BooksBorrowed borrowBook) {
		borrowBook.setStatus(true);
		BooksBorrowed bookBorrowed=bookBorrowService.borrowBook(borrowBook);
		if(bookBorrowed.equals(null))
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		else
			return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@PostMapping("/returnBook")
	public ResponseEntity<BooksBorrowed> returnBook(@RequestBody BooksBorrowed returnedBook) {
		returnedBook.setStatus(false);
		BooksBorrowed borrowed = bookBorrowService.returnBook(returnedBook);
		System.out.println(borrowed);
		if(borrowed.equals(null))
			return new ResponseEntity<BooksBorrowed>(HttpStatus.BAD_REQUEST);
		else
			return new ResponseEntity<BooksBorrowed>(borrowed,HttpStatus.OK);
	}
	
	@GetMapping("/getBorrowedBooks/{email}")
	public ResponseEntity<List<BooksBorrowed>> listBorrowedBooks(@PathVariable("email") String email) {
		List<BooksBorrowed> list=bookBorrowService.listBorrowedBooks(email);
		if(list.isEmpty())
			return new ResponseEntity<List<BooksBorrowed>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<BooksBorrowed>>(list,HttpStatus.OK);
	}
	
}
