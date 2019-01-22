package com.management.service.Borrower;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.management.Entity.BorrowerDetails;
import com.management.repository.BorrowerRepo;

@Service
public class BorrowerService implements BorrowerServiceInterface{
	
	@Autowired
	private BorrowerRepo borrowerRepo;
	
	public BorrowerDetails getPassword(String email) {
		BorrowerDetails borrower=null;
		if(borrowerRepo.findById(email).isPresent())
			borrower=(BorrowerDetails)borrowerRepo.findById(email).get();
		return borrower;
	}
	
	public BorrowerDetails registerBorrower(BorrowerDetails borrower) {
		return borrowerRepo.save(borrower);
	}
	
	public BorrowerDetails getBorrower(String email) {
		BorrowerDetails borrower=null;
		if(borrowerRepo.findById(email).isPresent())
			borrower=(BorrowerDetails)borrowerRepo.findById(email).get();
		return borrower;
	}
	
	public List<BorrowerDetails> getAllBorrowers() {
		List<BorrowerDetails> borrowerList=(List<BorrowerDetails>)borrowerRepo.findAll();
		return borrowerList;
	}
	
	public BorrowerDetails editBorrower(BorrowerDetails borrower) {
		return borrowerRepo.save(borrower);
	}
	
	public void deleteBorrower(String email) {
		borrowerRepo.deleteById(email);
	}
}
