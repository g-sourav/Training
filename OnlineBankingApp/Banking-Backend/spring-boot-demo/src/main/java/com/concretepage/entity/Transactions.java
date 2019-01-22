package com.concretepage.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="transactions")
public class Transactions {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String date_of_transaction;
	
	private long remaining_bal;
	private long transferred_amount;
	
	@ManyToOne
	@JoinColumn(name="account_No")
	private account accountNo;
	
	@ManyToOne
	@JoinColumn(name="recipient_No")
	private Addrecepient addrecepient; 
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDate_of_transaction() {
		return date_of_transaction;
	}
	public void setDate_of_transaction(String date_of_transaction) {
		this.date_of_transaction = date_of_transaction;
	}

	public long getRemaining_bal() {
		return remaining_bal;
	}
	public void setRemaining_bal(long remaining_bal) {
		this.remaining_bal = remaining_bal;
	}
	public long getTransferred_amount() {
		return transferred_amount;
	}
	public void setTransferred_amount(long transferred_amount) {
		this.transferred_amount = transferred_amount;
	}
	
	
	public account getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(account accountNo) {
		this.accountNo = accountNo;
	}
	public Addrecepient getAddrecepient() {
		return addrecepient;
	}
	public void setAddrecepient(Addrecepient addrecepient) {
		this.addrecepient = addrecepient;
	}
	@Override
	public String toString() {
		return "Transactions [id=" + id + ", date_of_transaction=" + date_of_transaction + ", transferred_amount="
				+ transferred_amount + ", account=" + accountNo + ", addrecepient=" + addrecepient + "]";
	}
	
	
}
