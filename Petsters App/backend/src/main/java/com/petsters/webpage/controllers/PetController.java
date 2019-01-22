package main.java.com.petsters.webpage.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import main.java.com.petsters.webpage.entity.pet;
import main.java.com.petsters.webpage.service.iPetService;




//@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("admin")
public class PetController {
	byte[] arr;
	@Autowired
	private iPetService petService;
	
	@RequestMapping("start")
	public String myindex(){
		System.out.println("inside myindex");
		return "index";
	}
	@GetMapping("getpet/{id}")
	public ResponseEntity<pet> getpetById(@PathVariable("id") Integer id) {
		System.out.println("inside getPet");
		pet pet = petService.getpetById(id);
		return new ResponseEntity<pet>(pet, HttpStatus.OK);
	}
	@GetMapping("pets")
	public ResponseEntity<List<pet>> getAllpets() {
		List<pet> list = petService.getAllpets();
		return new ResponseEntity<List<pet>>(list, HttpStatus.OK);
	}
	@PostMapping("image")
	public ResponseEntity<Void> addpetimage(@RequestParam("file") MultipartFile file) throws Exception {
		System.out.println(file.getSize());
		System.out.println(file.getOriginalFilename());
		arr =file.getBytes();
		
		boolean flag = true;
        
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        
        return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	@PostMapping("pet")
	public ResponseEntity<Void> addpet(@RequestBody pet pet) {
		pet.setImage(arr);
		petService.addpet(pet);
		System.out.println(pet);
		boolean flag = true;
        
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        
        return new ResponseEntity<Void>(HttpStatus.CREATED);
	}	
	@PutMapping("pet")
	public ResponseEntity<pet> updatepet(@RequestBody pet pet) {
		petService.updatepet(pet);
		return new ResponseEntity<pet>(pet, HttpStatus.OK);
	}
	@PutMapping("setStatus")
	public ResponseEntity<Void> setStatus(@RequestBody Integer id) {
		System.out.println("inside pet status");
		System.out.println(id);
		petService.updatePetStatus(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	@DeleteMapping("pet/{id}")
	public ResponseEntity<Void> deletepet(@PathVariable("id") Integer id) {
		petService.deletepet(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}	
} 