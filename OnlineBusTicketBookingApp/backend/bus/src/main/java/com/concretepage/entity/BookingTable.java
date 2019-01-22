package com.concretepage.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="BookingTable")
public class BookingTable implements Serializable {

	 private static final long serialVersionUID = 1L;
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			@Column(name="ticketNumber")
		    private long ticketNumber;
			@Column(name="mailId")
		    private String mailId;
			@Column(name="busNumber")	
			private String busNumber;
			@Column(name="seatNumber")	
			private String seatNumber;
			@Column(name="totalPrice")	
			private String totalPrice;
			@Column(name="dateOfJourney")	
			private String dateOfJourney;
			public long getTicketNumber() {
				return ticketNumber;
			}
			public void setTicketNumber(long ticketNumber) {
				this.ticketNumber = ticketNumber;
			}
			
			public String getMailId() {
				return mailId;
			}
			public void setEmailId(String emailId) {
				mailId = emailId;
			}
			public String getBusNumber() {
				return busNumber;
			}
			public void setBusNumber(String busNumber) {
				this.busNumber = busNumber;
			}
			public String getSeatNumber() {
				return seatNumber;
			}
			public void setSeatNumber(String seatNumber) {
				this.seatNumber = seatNumber;
			}
			public String getTotalPrice() {
				return totalPrice;
			}
			public void setTotalPrice(String totalPrice) {
				this.totalPrice = totalPrice;
			}
			public String getDateOfJourney() {
				return dateOfJourney;
			}
			public void setDateOfJourney(String dateOfJourney) {
				this.dateOfJourney = dateOfJourney;
			}
			public void setMailId(String mailId) {
				this.mailId = mailId;
			}
			
			
			
	}
