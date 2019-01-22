package com.test.contoller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity

public class Register {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_id")
	private int id;
	String email;
	String password;
	String phonenumber;
	@JsonIgnore
	@OneToMany(mappedBy="user",cascade={CascadeType.REMOVE})
	List<BookTicket> tickets = new ArrayList<BookTicket>();
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}
	public List<BookTicket> getTickets() {
		return tickets;
	}
	public void setTickets(List<BookTicket> tickets) {
		this.tickets = tickets;
	}
	public void addTicket(BookTicket bt){
		this.tickets.add(bt);
		bt.setUser(this);
	}
	@Override
	public String toString() {
		return "Register [id=" + id + ", email=" + email + ", password=" + password + ", phonenumber=" + phonenumber
				+ "]";
	}
}
