package com.test.contoller;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface SeatRepo extends CrudRepository<Seats, Integer> {
}
