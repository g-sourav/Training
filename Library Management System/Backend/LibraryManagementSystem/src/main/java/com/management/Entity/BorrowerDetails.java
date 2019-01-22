package com.management.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class BorrowerDetails {

	@Id
	private String borrowerEmail;
	private String borrowerName;
	private String borrowerPassword;
	private String borrowerContact;
	
	public String getBorrowerName() {
		return borrowerName;
	}
	public void setBorrowerName(String borrowerName) {
		this.borrowerName = borrowerName;
	}
	public String getBorrowerEmail() {
		return borrowerEmail;
	}
	public void setBorrowerEmail(String borrowerEmail) {
		this.borrowerEmail = borrowerEmail;
	}
	public String getBorrowerPassword() {
		return borrowerPassword;
	}
	public void setBorrowerPassword(String borrowerPassword) {
		this.borrowerPassword = borrowerPassword;
	}
	public String getBorrowerContact() {
		return borrowerContact;
	}
	public void setBorrowerContact(String borrowerContact) {
		this.borrowerContact = borrowerContact;
	}
	@Override
	public String toString() {
		return "BorrowerDetails [borrowerEmail=" + borrowerEmail + ", borrowerName=" + borrowerName
				+ ", borrowerPassword=" + borrowerPassword + ", borrowerContact=" + borrowerContact + "]";
	}
	

}

