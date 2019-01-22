package com.container.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="userdetails")

public class userdetails implements Serializable { 
	private static final long serialVersionUID = 1L;
	
	@Column(name="password")
	String password;
	@Id
	@Column (name="userName")
	String userName;
	@Column (name="name")
	String name;
	@Column (name="email")
	String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Column(name="phoneNumber")
	String phoneNumber;
	@Column(name="recentAddress")
	String recentAddress;
	@Column(name="orderInCart")
	int orderInCart;
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getRecentAddress() {
		return recentAddress;
	}
	public void setRecentAddress(String recentAddress) {
		this.recentAddress = recentAddress;
	}
	public int getOrderInCart() {
		return orderInCart;
	}
	public void setOrderInCart(int orderInCart) {
		this.orderInCart = orderInCart;
	}
}
