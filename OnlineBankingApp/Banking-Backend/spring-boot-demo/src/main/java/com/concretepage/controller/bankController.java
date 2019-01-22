package com.concretepage.controller;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.concretepage.entity.Addrecepient;

import com.concretepage.entity.Signup;
import com.concretepage.entity.Status;
import com.concretepage.entity.Transactions;
import com.concretepage.entity.account;
import com.concretepage.service.Ibankservice;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@CrossOrigin(origins = "http://10.223.99.44:8080")
@RestController
@RequestMapping("bankaccount")
public class bankController {
	@Autowired
	private Ibankservice bankservice;
	
	
	private static final Logger LOGGER = LoggerFactory.getLogger(bankController.class);
	
	
	@GetMapping("bankuser/{uid}")
	public ResponseEntity<Signup> getUserByuid(@PathVariable("uid") Integer uid) {
		
		Signup signup = bankservice.getByuid(uid);
		
		return new ResponseEntity<Signup>(signup, HttpStatus.OK);
	}
	
	
	
	
	@GetMapping("bankusers")
	public ResponseEntity<List<Signup>> getAllUsers() {
		List<Signup> list = bankservice.getAllUsers();
		return new ResponseEntity<List<Signup>>(list, HttpStatus.OK);
	}
	
	
	@PostMapping("bankuser")
	public ResponseEntity<Void> addUser(@RequestBody Signup signup, UriComponentsBuilder builder) {
        boolean flag = bankservice.addUser(signup);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/bankuser/{id}").buildAndExpand(signup.getUid()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	
	
	@PutMapping("bankuser")
	public ResponseEntity<Signup> updateUser(@RequestBody Signup signup) {
		bankservice.updateUser(signup);
		return new ResponseEntity<Signup>(signup, HttpStatus.OK);
	}
	

	@PostMapping("addrecepient")
	public ResponseEntity<Void> addrecepient(@RequestBody Addrecepient addrecepient, UriComponentsBuilder builder) {
        boolean flag = bankservice.addrecepient(addrecepient);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/addrecepient/{accno}").buildAndExpand(addrecepient.getAccno()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	
	@PostMapping("/authenticate")
	public ResponseEntity<Status> authenticated(@RequestBody Signup signup) {
		
		String actualPassword = null;
		String password = signup.getPassword();
	
		Status status = new Status();
		status.setAuthenticated(false);
		Signup signup1 = bankservice.getByuid(signup.getUid());
		

		if (signup1 != null) {
			actualPassword = signup1.getPassword();
			System.out.println(actualPassword);

			if (actualPassword.equals(password)) {
				{
					System.out.println(password);
					if((actualPassword.equals("nikki"))&&(password.equals("nikki"))){
						System.out.println("3");
						status.setAdminauthenticated(true);
						System.out.println(status.isAdminauthenticated());
					}
					else{
						status.setAdminauthenticated(false);
					}
					status.setSignup(signup1);	
						
				}
								
			}
		}
		status.setAuthenticated(password.equals(actualPassword));
		
		
		return new ResponseEntity<Status>(status,HttpStatus.OK);		
	}
	
	
	
	

	@PostMapping("/authenticatesignup")
	public ResponseEntity<Status> authenticatedsignup(@RequestBody Signup signup) {
	     account acc=new account();
		String accnum = null;
		 accnum = signup.getAccnum();
			

		Status status = new Status();
		status.setAuthenticated(false);
		account actualaccnum = bankservice.getByaccno(accnum);
	
		
		
		if (actualaccnum != null) {
			status.setAuthenticated(accnum.equals(actualaccnum.getAccno()));
			System.out.println(status.isAuthenticated());
			
			return new ResponseEntity<Status>(status,HttpStatus.OK);		
			
		}
		else
		{
			System.out.println(status.isAuthenticated());
			return new ResponseEntity<Status>(status,HttpStatus.CONFLICT);	
		}
		
	
		
	}
	


	@GetMapping("balance/{uid}")
	public ResponseEntity<account> getUserByaccnum(@PathVariable("uid")int uid) {
		
	
		
		 
			Signup signup= bankservice.getByuid(uid);
			System.out.println(signup.getAccnum());
			String acno=signup.getAccnum();
		account account = bankservice.getByaccno(acno);
		System.out.println(account.getBalance());
		return new ResponseEntity<account>(account, HttpStatus.OK);
	}
	
	@GetMapping("recepient")
	public ResponseEntity<List<Addrecepient>> getAllRecepients() {
		List<Addrecepient> list = bankservice.getAllRecepients();
		return new ResponseEntity<List<Addrecepient>>(list, HttpStatus.OK);
	}
	@PostMapping("transfer")
	public ResponseEntity<Void> getUserByaccnum(@RequestBody Transactions trans ) {
		
		
		System.out.println(trans.getAccountNo());
		String accountno=trans.getAccountNo().getAccno();
		System.out.println(trans.getAccountNo().getBalance());
		long actualBalance=trans.getAccountNo().getBalance();
		System.out.println(trans.getId());

		System.out.println(trans.getDate_of_transaction());
		
		System.out.println(trans.getRemaining_bal());
		
		System.out.println(trans.getTransferred_amount());
		long Transferredamount=trans.getTransferred_amount();
	long updatedBalance=actualBalance-Transferredamount;
		trans.setRemaining_bal(updatedBalance);

		bankservice.updatetransaction(trans);
		account account = bankservice.getByaccno(accountno);
		account.setBalance(updatedBalance);

		bankservice.updatebalance(account);
		
//		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
//		LocalDateTime now = LocalDateTime.now();

		
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	@GetMapping("transactionlist/{uid}")
	public ResponseEntity<List<Transactions>> getAllTransactionsbyAccnum(@PathVariable("uid")int uid) {
		
		
		Signup signup= bankservice.getByuid(uid);
		System.out.println(signup.getAccnum());
		String acno=signup.getAccnum();
		account acc= bankservice.getByaccno(acno);
		System.out.println(acc.getBalance());
		System.out.println("hii");
		List<Transactions> list = bankservice.getAllTransactionsbyaccount(acc);
		return new ResponseEntity<List<Transactions>>(list, HttpStatus.OK);
	}
	
	@PostMapping("addaccount")
	public ResponseEntity<Void> addrecepient(@RequestBody account account, UriComponentsBuilder builder) {
        boolean flag = bankservice.addaccount(account);
        
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/addaccount/{accno}").buildAndExpand(account.getAccno()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@GetMapping("/viewtransactionlist")
	public ResponseEntity<List<Transactions>> getAllTransactions() {
		

		List<Transactions> list = bankservice.getAllTransactions();
	

		return new ResponseEntity<List<Transactions>>(list, HttpStatus.OK);
	}
	
	
} 
