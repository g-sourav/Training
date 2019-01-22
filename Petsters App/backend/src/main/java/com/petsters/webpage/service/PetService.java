package main.java.com.petsters.webpage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import main.java.com.petsters.webpage.entity.pet;
import main.java.com.petsters.webpage.repository.PetRepository;


@Service
public class PetService implements iPetService{
	@Autowired
	private PetRepository petRepository;
	
	public pet getpetById(long pet_Id) {
		pet obj = petRepository.findById(pet_Id).get();
		System.out.println(obj);
		return obj;
	}	
	
	public List<pet> getAllpets(){
		List<pet> list = new ArrayList<>();
		petRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	
	public void updatepet(pet pet) {
		petRepository.save(pet);
	}
	
	public void deletepet(int petId) {
		petRepository.delete(getpetById(petId));
	}

	
	public boolean addpet(pet pet) {
		petRepository.save(pet);
		return true;
	}
	public void updatePetStatus(long id){
		System.out.println(id);
		pet petpojo=petRepository.findById(id).get();
		petpojo.setSold(true);
		petRepository.save(petpojo);
	}
}
