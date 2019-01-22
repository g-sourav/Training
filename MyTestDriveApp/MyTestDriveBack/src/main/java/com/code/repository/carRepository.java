package com.code.repository;

import org.springframework.data.repository.CrudRepository;

import com.code.Entity.carDetails;

public interface carRepository extends CrudRepository<carDetails,Integer>{
public carDetails findCarDetailsByCarName(String carName);
}
