package com.test.contoller;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowRepo extends CrudRepository<Show, Integer> {
	List<Show> findAllByDate(String date);
	List<Show> findAllByMovie(MyFormData movie);
}
