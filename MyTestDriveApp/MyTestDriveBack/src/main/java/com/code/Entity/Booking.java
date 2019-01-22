package com.code.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
@Entity
public class Booking {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Integer bookId;
	String Date;
	@ManyToOne
	@JoinColumn(name="userId")
	User user;
	@OneToOne
	@JoinColumn(name="locationId")
	location location;
	@OneToOne
	@JoinColumn(name="carId")
	carDetails carDetails;
	public Integer getBookId() {
		return bookId;
	}
	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public location getLocation() {
		return location;
	}
	public void setLocation(location location) {
		this.location = location;
	}
	public carDetails getCarDetails() {
		return carDetails;
	}
	public void setCarDetails(carDetails carDetails) {
		this.carDetails = carDetails;
	}
	
	
}
