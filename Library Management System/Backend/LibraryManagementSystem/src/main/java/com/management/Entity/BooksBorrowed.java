package com.management.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="BooksBorrowed")
public class BooksBorrowed {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String borrowerEmail;
	private String bookId;
	private String bookName;
	private String borrowDate;
	private String returnDate;
	private boolean status;
	private int fineDue;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBorrowerEmail() {
		return borrowerEmail;
	}
	public void setBorrowerEmail(String borrowerEmail) {
		this.borrowerEmail = borrowerEmail;
	}
	public String getBookId() {
		return bookId;
	}
	public void setBookId(String bookId) {
		this.bookId = bookId;
	}
	
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBorrowDate() {
		return borrowDate;
	}
	public void setBorrowDate(String borrowDate) {
		this.borrowDate = borrowDate;
	}
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public int getFineDue() {
		return fineDue;
	}
	public void setFineDue(int fineDue) {
		this.fineDue = fineDue;
	}
	@Override
	public String toString() {
		return "BooksBorrowed [id=" + id + ", borrowerEmail=" + borrowerEmail + ", bookId=" + bookId + ", borrowDate="
				+ borrowDate + ", returnDate=" + returnDate + ", status=" + status + ", fineDue=" + fineDue + "]";
	}
	
}
