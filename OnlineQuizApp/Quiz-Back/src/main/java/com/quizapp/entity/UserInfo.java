package com.quizapp.entity;

public class UserInfo {
	 public String email;
	 public String userpassword;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	@Override
	public String toString() {
		return "User [email=" + email + ", userpassword=" + userpassword + "]";
	}
	
	}
