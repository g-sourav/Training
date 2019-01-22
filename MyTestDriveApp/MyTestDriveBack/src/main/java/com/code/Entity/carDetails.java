package com.code.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class carDetails{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer carId;
	
 public Integer getCarId() {
		return carId;
	}

	public void setCarId(Integer carId) {
		this.carId = carId;
	}

private String carName;

public String getCarName() {
	return carName;
}

public void setCarName(String carName) {
	this.carName = carName;
}
  
}
