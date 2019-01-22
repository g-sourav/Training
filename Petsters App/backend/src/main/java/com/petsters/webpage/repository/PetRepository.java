package main.java.com.petsters.webpage.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import main.java.com.petsters.webpage.entity.pet;


@Repository
public interface PetRepository extends CrudRepository<pet, Long> {
}
