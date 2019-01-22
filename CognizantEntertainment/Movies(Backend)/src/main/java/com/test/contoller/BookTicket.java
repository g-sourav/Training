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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class BookTicket {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int id;
	
	@ManyToOne
	@JoinColumn(name="show_id")
	Show shows;
	@OneToMany(mappedBy="bookTicket",cascade=CascadeType.REMOVE)
	List<Seats> bookSeats = new ArrayList<Seats>();
	@ManyToOne
	@JoinColumn(name="userId")
	Register user;
	
	public BookTicket() {
		
	}
	public Show getShow() {
		return shows;
	}
	public void setShow(Show show) {
		this.shows = show;
	}
	
	public List<Seats> getBookSeats() {
		return bookSeats;
	}
	public void setBookSeats(List<Seats> bookSeats) {
		this.bookSeats = bookSeats;
	}
	public void add(Seats s1){
		this.bookSeats.add(s1);
		s1.setBookTicket(this);
	}
	@Override
	public String toString() {
		return "BookTicket [id=" + id + ", shows=" + shows + ", bookSeats=" + bookSeats + "]";
	}
	public Register getUser() {
		return user;
	}
	public void setUser(Register user) {
		this.user = user;
	}
	
}
