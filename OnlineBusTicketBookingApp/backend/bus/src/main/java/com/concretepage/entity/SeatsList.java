package com.concretepage.entity;
import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;
@Entity
@Table(name="SeatsList")
public class SeatsList implements Serializable {
	
 private static final long serialVersionUID = 1L;
				@Id
				@GeneratedValue(strategy=GenerationType.AUTO)
			    private int seatId;
				
				private int seatNumber;
				 @ManyToOne
				 @JoinColumn(name="seatno")
				private BusList busList;
				@ColumnDefault("1")
				private boolean availability;

				public int getSeatNumber() {
					return seatNumber;
				}

				public void setSeatNumber(int seatNumber) {
					this.seatNumber = seatNumber;
				}

				public int getSeatId() {
					return seatId;
				}

				public void setSeatId(int seatId) {
					this.seatId = seatId;
				}

				public BusList getBusList() {
					return busList;
				}

				public void setBusList(BusList busList) {
					this.busList = busList;
				}

				public boolean isAvailability() {
					return availability;
				}

				public void setAvailability(boolean availability) {
					this.availability = availability;
				}
			
				

				
				
}
