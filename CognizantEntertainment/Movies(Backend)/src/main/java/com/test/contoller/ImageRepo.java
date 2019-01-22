package com.test.contoller;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ImageRepo extends CrudRepository<MyFormData, Integer> {

	MyFormData findByTitle(String Title);
}
