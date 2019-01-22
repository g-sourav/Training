package com.management.service.BookBorrow;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Entity.BooksBorrowed;
import com.management.repository.BookBorrowRepo;

@Service
public class BookBorrowService implements BookBorrowServiceInterface{
	
	@Autowired
	BookBorrowRepo bookBorrowRepo;
	
	public BooksBorrowed borrowBook(BooksBorrowed bookBorrowed) {
		return bookBorrowRepo.save(bookBorrowed);
	}
	
	public BooksBorrowed returnBook(BooksBorrowed returnedBook) {
		try {
			Date borrowDate=new SimpleDateFormat("dd/MM/yyyy").parse(returnedBook.getBorrowDate());
			Date returnDate=new SimpleDateFormat("dd/MM/yyyy").parse(returnedBook.getReturnDate());
			long diff=returnDate.getTime() - borrowDate.getTime();
			int days=(int)(diff / (1000*60*60*24));
			if(days>7) returnedBook.setFineDue(3*(days-7));
			
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return bookBorrowRepo.save(returnedBook);
	}
	
	public List<BooksBorrowed> listBorrowedBooks(String email) {
		List<BooksBorrowed> list=bookBorrowRepo.findAllByBorrowerEmail(email);
		return list;
	}
}
