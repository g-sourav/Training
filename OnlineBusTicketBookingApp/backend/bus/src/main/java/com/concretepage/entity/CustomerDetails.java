package com.concretepage.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="CustomerDetails")
public class CustomerDetails implements Serializable{
	
 private static final long serialVersionUID = 1L;
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		@Column(name="customerId")
	    private long customerId;  
		@Column(name="customerName")
	    private String customerName;
		@Column(name="mailId")	
		private String mailId;
		@Column(name="mobileNumber")	
		private String mobileNumber;
		@Column(name="password")	
		private String password;
		@Column(name="age")	
		private String age;
		@Column(name="gender")	
		private String gender;
		@Column(name="nationality")	
		private String nationality;
		
		public long getCustomerId() {
			return customerId;
		}
		public void setCustomerId(long customerId) {
			this.customerId = customerId;
		}
		public String getCustomerName() {
			return customerName;
		}
		public void setCustomerName(String customerName) {
			this.customerName = customerName;
		}
		public String getMailId() {
			return mailId;
		}
		public void setMailId(String mailId) {
			this.mailId = mailId;
		}
		public String getMobileNumber() {
			return mobileNumber;
		}
		public void setMobileNumber(String mobileNumber) {
			this.mobileNumber = mobileNumber;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getAge() {
			return age;
		}
		public void setAge(String age) {
			this.age = age;
		}
		public String getGender() {
			return gender;
		}
		public void setGender(String gender) {
			this.gender = gender;
		}
		public String getNationality() {
			return nationality;
		}
		public void setNationality(String nationality) {
			this.nationality = nationality;
		}
		
		
		}
	

