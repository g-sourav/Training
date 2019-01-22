package com.management.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="BookDetails")
public class BookDetails {
	
	
	@Id
	private String bookId;
	private String bookTitle;
	private String bookAuthor;
	private String bookPublishDate;
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	public String getBookTitle() {
		return bookTitle;
	}
	public void setBookTitle(String bookTitle) {
		this.bookTitle = bookTitle;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public String getBookPublishDate() {
		return bookPublishDate;
	}
	public void setBookPublishDate(String bookPublishDate) {
		this.bookPublishDate = bookPublishDate;
	}
	@Override
	public String toString() {
		return "BookDetails [bookId=" + bookId + ", bookTitle=" + bookTitle + ", bookAuthor=" + bookAuthor
				+ ", bookPublishDate=" + bookPublishDate + "]";
	}
	
}



