package com.test.contoller;

import org.springframework.data.repository.CrudRepository;

public interface RegisterRepository extends CrudRepository<Register, Integer> {

Register findByEmail(String name);



}
