package com.test.contoller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Seats {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	int seatNo;
	int isBooked;
	boolean isChecked;
	
	@ManyToOne
	@JoinColumn(name="book_id")
	@JsonIgnore
	BookTicket bookTicket;
	
	public Seats(){
		
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSeatNo() {
		return seatNo;
	}

	public void setSeatNo(int seatNo) {
		this.seatNo = seatNo;
	}

	public int getIsBooked() {
		return isBooked;
	}

	public void setIsBooked(int isBooked) {
		this.isBooked = isBooked;
	}

	public boolean getIsChecked() {
		return isChecked;
	}

	public void setIsChecked(boolean isChecked) {
		this.isChecked = isChecked;
	}

	public BookTicket getBookTicket() {
		return bookTicket;
	}
	public void setBookTicket(BookTicket bookTicket) {
		this.bookTicket = bookTicket;
	}

	@Override
	public String toString() {
		return "Seats [id=" + id + ", seatNo=" + seatNo + ", isBooked=" + isBooked + "]";
	}
	
	
	
}
