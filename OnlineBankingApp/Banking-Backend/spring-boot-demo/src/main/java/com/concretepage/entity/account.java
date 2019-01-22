package com.concretepage.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="account")
public class account {
	@Id
	private String accno;
	private long balance;
	private String ifsccode;	
	@OneToMany(mappedBy = "accountNo")
	private List<Transactions> list = new ArrayList<Transactions>() ;
		 
	@JsonIgnore
	public List getTransactions() {
		return list;
	}
	
	public void setTransactions(List transactions) {
		this.list = transactions;
	}
	public String getAccno() {
		return accno;
	}
	public void setAccno(String accno) {
		this.accno = accno;
	}
	public long getBalance() {
		return balance;
	}
	public void setBalance(long balance) {
		this.balance = balance;
	}
	public String getIfsccode() {
		return ifsccode;
	}

	public void setIfsccode(String ifsccode) {
		this.ifsccode = ifsccode;
	}
	
	
	
	
	
}
