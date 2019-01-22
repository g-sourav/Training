package com.code.repository;

import org.springframework.data.repository.CrudRepository;

import com.code.Entity.Booking;

public interface BookingRepository extends CrudRepository<Booking,Integer> {

}
