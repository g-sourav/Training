package com.test.contoller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="showTickets")
public class Show {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	String time;
	String date;
	float price;
	int availSeats;
	@ManyToOne
	@JoinColumn(name="movieId")
	MyFormData movie;
	@OneToMany(mappedBy="shows",cascade=CascadeType.REMOVE)
	@JsonIgnore
	List<BookTicket> bookList = new ArrayList<BookTicket>();
	
	public Show(){
		
	}
	public int getAvailSeats() {
		return availSeats;
	}
	public void setAvailSeats(int availSeats) {
		this.availSeats = availSeats;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public List<BookTicket> getBookList() {
		return bookList;
	}
	public void setBookList(List<BookTicket> bookList) {
		this.bookList = bookList;
	}
	public void add(BookTicket bt){
		this.bookList.add(bt);
		bt.setShow(this);
	}
	public MyFormData getMovie() {
		return movie;
	}
	public void setMovie(MyFormData movie) {
		this.movie = movie;
	}
	
	
	
	
}
