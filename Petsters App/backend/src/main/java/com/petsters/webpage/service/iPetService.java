package main.java.com.petsters.webpage.service;

import java.util.List;

import main.java.com.petsters.webpage.entity.pet;



public interface iPetService {
	 List<pet> getAllpets();
     pet getpetById(long pet_Id);
     boolean addpet(pet pet);
     void updatepet(pet pet);
     void deletepet(int pet_id);
     public void updatePetStatus(long id);
}
