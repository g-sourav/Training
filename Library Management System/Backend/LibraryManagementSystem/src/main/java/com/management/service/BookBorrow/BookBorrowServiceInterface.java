package com.management.service.BookBorrow;

import java.util.List;

import com.management.Entity.BooksBorrowed;

public interface BookBorrowServiceInterface {
	
	public BooksBorrowed borrowBook(BooksBorrowed bookBorrowed);
	public BooksBorrowed returnBook(BooksBorrowed bookReturned);
	public List<BooksBorrowed> listBorrowedBooks(String email);

}
