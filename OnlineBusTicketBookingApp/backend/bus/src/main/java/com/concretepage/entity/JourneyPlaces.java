package com.concretepage.entity;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="JourneyPlaces")
public class JourneyPlaces implements Serializable {

	 private static final long serialVersionUID = 1L;
			@Id
			@GeneratedValue(strategy=GenerationType.AUTO)
			@Column(name="placeId")
		    private long placeId;  
			@Column(name="placeName")
		    private String placeName;
			@Column(name="basicFare")	
			private long basicFare;
			
			public long getBasicFare() {
				return basicFare;
			}
			public void setBasicFare(long basicFare) {
				this.basicFare = basicFare;
			}
			
			public long getPlaceId() {
				return placeId;
			}
			public void setPlaceId(long placeId) {
				this.placeId = placeId;
			}
			public String getPlaceName() {
				return placeName;
			}
			public void setPlaceName(String placeName) {
				this.placeName = placeName;
			}
			
			
}
