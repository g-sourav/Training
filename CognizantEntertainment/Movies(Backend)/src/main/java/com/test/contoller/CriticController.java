package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value="MyMovies/critic")

public class CriticController {
	@Autowired
     private CriticInterface criticInterface;
	@PostMapping("/criticupload")
	public ResponseEntity<CriticAdmin> SaveUsers(@RequestBody CriticAdmin r){
		criticInterface.addCritic(r);
		return new ResponseEntity(r,HttpStatus.OK);
	}
	
	@GetMapping("/{critic_title}")
	public ResponseEntity<CriticAdmin> getFormByTitle(@PathVariable("critic_title") String title){
		System.out.println("Hoiiiiii");
		CriticAdmin data=criticInterface.getFormByTitle(title);
	

		return new ResponseEntity<CriticAdmin>(data,HttpStatus.OK);
	}
	
	
}
