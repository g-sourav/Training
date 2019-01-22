package com.concretepage.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;




@Entity
@Table(name="signup")
public class Signup {
	
	
	
	@Id
	private int uid;
	private String password;
	private String mailid;
	private String uname;
	private String address;
	private long phonenum;
	
	private String accnum;
	private String cardnum;
	private String pin;
	/*@OneToMany(mappedBy = "signup", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Transactions> listTransaction;*/
	
	
	
	
	
	/*public List<Transactions> getListTransaction() {
		return listTransaction;
	}
	public void setListTransaction(List<Transactions> listTransaction) {
		this.listTransaction = listTransaction;
	}*/
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMailid() {
		return mailid;
	}
	public void setMailid(String mailid) {
		this.mailid = mailid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhonenum() {
		return phonenum;
	}
	public void setPhonenum(long phonenum) {
		this.phonenum = phonenum;
	}
	public String getAccnum() {
		return accnum;
	}
	public void setAccnum(String accnum) {
		this.accnum = accnum;
	}
	public String getCardnum() {
		return cardnum;
	}
	public void setCardnum(String cardnum) {
		this.cardnum = cardnum;
	}
	public String getPin() {
		return pin;
	}
	public void setPin(String pin) {
		this.pin = pin;
	}
	


	/*@Override
	public String toString() {
		return "signup [id=" + id + ", uid=" + uid + ", password=" + password + ", mailid=" + mailid + ", name=" + uname
				+ ", address=" + address + ", phonenum=" + phonenum + ", accnum=" + accnum + ", cardnum=" + cardnum
				+ ", pin=" + pin + "]";
	}*/

}
