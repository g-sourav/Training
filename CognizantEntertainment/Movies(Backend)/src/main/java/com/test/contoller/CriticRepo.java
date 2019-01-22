package com.test.contoller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
	public interface CriticRepo extends CrudRepository<CriticAdmin, Integer> {

		CriticAdmin findByTitle(String title);
	}

