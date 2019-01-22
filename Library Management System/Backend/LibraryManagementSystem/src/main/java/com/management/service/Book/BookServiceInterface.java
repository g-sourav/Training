package com.management.service.Book;

import java.util.List;

import com.management.Entity.BookDetails;

public interface BookServiceInterface {
	
	public List<BookDetails> getAllBooks();
	public List<BookDetails> getBooks(String searchString);
	public void deleteBook(String bookId);
	public BookDetails getABook(String bookId);
	public boolean addBook(BookDetails book);
	public boolean editBook(BookDetails book);

}
