package com.management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.Entity.BorrowerDetails;
import com.management.service.Borrower.BorrowerServiceInterface;

@RestController
@RequestMapping("borrower")
public class BorrowerController {
		
	@Autowired
	BorrowerServiceInterface borrowerService;
	
	@GetMapping("getPassword/{email}")
	public ResponseEntity<BorrowerDetails> getPassword(@PathVariable("email") String email) {
		BorrowerDetails borrower=borrowerService.getPassword(email);
		System.out.println(borrower);
		if(borrower.equals(null)) 
			return new ResponseEntity<BorrowerDetails>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<BorrowerDetails>(borrower,HttpStatus.OK);
	}
	@PostMapping("registerBorrower")
	public ResponseEntity<Void> registerBorrower(@RequestBody BorrowerDetails borrower) {
		System.out.println("in registerBorrower");
		System.out.println(borrower);
		BorrowerDetails borrowerCheck=borrowerService.registerBorrower(borrower);
		if(borrowerCheck.equals(null)) 
			return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
		else
			return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@RequestMapping("/getBorrower/{email}")
	public ResponseEntity<BorrowerDetails> getBorrower(@PathVariable("email") String email) {
		BorrowerDetails borrower=borrowerService.getBorrower(email);
		if(borrower.equals(null)) 
			return new ResponseEntity<BorrowerDetails>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<BorrowerDetails>(borrower,HttpStatus.OK);
	}
	
	@GetMapping("/getAllBorrowers")
	public ResponseEntity<List<BorrowerDetails>> getAllBorrowers() {
		System.out.println("in getAllBorrowers");
		List<BorrowerDetails> borrowerList = borrowerService.getAllBorrowers();
		if(borrowerList.isEmpty()) 
			return new ResponseEntity<List<BorrowerDetails>>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<List<BorrowerDetails>>(borrowerList,HttpStatus.OK);
	}
	
	@PostMapping("/editBorrower")
	public ResponseEntity<Void> editBorrower(@RequestBody BorrowerDetails borrower) {
		BorrowerDetails borrowerCheck=borrowerService.editBorrower(borrower);
		if(borrowerCheck.equals(null)) 
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		else
			return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	@DeleteMapping("/deleteBorrower/{email}")
	public ResponseEntity<Void> deleteBorrower(@PathVariable("email") String email) {
		borrowerService.deleteBorrower(email);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
