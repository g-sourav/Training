package com.concretepage.entity;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
@Entity
@Table(name="BusList")
public class BusList implements Serializable {

 private static final long serialVersionUID = 1L;
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
	    	@Column(name="busNumber")
		    private long busNumber;  
		    public Set<SeatsList> getSeats() {
				return seats;
			}
			public void setSeats(Set<SeatsList> seats) {
				this.seats = seats;
			}
			
			@OneToMany(cascade=CascadeType.ALL,mappedBy="busList")
		   private Set<SeatsList> seats ;		
        	
			
			@Column(name="busName")
		    private String busName;
			@Column(name="busType")	
			private String busType;
			@Column(name="availability")	
			private boolean availability;
			
			
			public long getBusNumber() {
				return busNumber;
			}
			public void setBusNumber(long busNumber) {
				this.busNumber = busNumber;
			}
			public String getBusName() {
				return busName;
			}
			public void setBusName(String busName) {
				this.busName = busName;
			}
			public String getBusType() {
				return busType;
			}
			public void setBusType(String busType) {
				this.busType = busType;
			}
			
			public boolean getAvailability() {
				return availability;
			}
			public void setAvailability(boolean availability) {
				this.availability = availability;
			}
						
			

}
