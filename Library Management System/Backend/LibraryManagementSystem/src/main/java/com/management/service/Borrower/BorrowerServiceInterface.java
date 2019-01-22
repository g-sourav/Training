package com.management.service.Borrower;

import java.util.List;

import com.management.Entity.BookDetails;
import com.management.Entity.BorrowerDetails;

public interface BorrowerServiceInterface {
	
	public BorrowerDetails getPassword(String email);
	public BorrowerDetails registerBorrower(BorrowerDetails borrower);
	public BorrowerDetails getBorrower(String email);
	public List<BorrowerDetails> getAllBorrowers();
	public BorrowerDetails editBorrower(BorrowerDetails borrower);
	public void deleteBorrower(String email);

}
