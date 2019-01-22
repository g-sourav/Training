package com.concretepage.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concretepage.entity.Addrecepient;
import com.concretepage.entity.Signup;
import com.concretepage.entity.Transactions;
import com.concretepage.entity.account;
import com.concretepage.repository.AccountantRepository;
import com.concretepage.repository.AddrecepRepository;
import com.concretepage.repository.BalanceRepository;
import com.concretepage.repository.BankRepository;
import com.concretepage.repository.TransactionsRepository;
@Service
public class bankservice implements Ibankservice {
	@Autowired
	private BankRepository brepository;
	@Autowired
	private AddrecepRepository arepository;
	@Autowired
	private AccountantRepository accRepository;
	@Autowired
	private BalanceRepository balancerepository;
	@Autowired
	private TransactionsRepository tRepository;
	public Signup getUserByuid(int uid) {
		Signup obj = brepository.findByuid(uid).get(uid);
		return obj;
	}	
	public List<Signup> getAllUsers(){
		List<Signup> list = new ArrayList<>();
		brepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	public synchronized boolean addUser(Signup signup){
    	   brepository.save(signup);
    	   return true;
       
	}
	public void updateUser(Signup signup) {
		brepository.save(signup);
	}
	public synchronized boolean addrecepient(Addrecepient addrecepient){      
		arepository.save(addrecepient);
 	   return true;
	}
	public Signup getByuid(int uid){	
		return accRepository.findByuid(uid);
	}
	public account getByaccno(String accnum){	
		return balancerepository.findByaccno(accnum);
	}	
	public List<Addrecepient> getAllRecepients() {	
		List<Addrecepient> list = new ArrayList<>();
		arepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	public void updatebalance(account account) {	
		balancerepository.save(account);
	}
	public void updatetransaction(Transactions tr) {	
		tRepository.save(tr);
	}
	public List<Transactions> getAllTransactions() {
		List<Transactions> list = new ArrayList<>();
		tRepository.findAll().forEach(e -> list.add(e));
		System.out.println("5");
		System.out.println(list);

		return list;
		
	}



	public List<Transactions> getAllTransactionsbyaccount(account acc) {
		
	
		System.out.println("sddsgsyfytsf");		
		//account accountobj = new account();
		account a = balancerepository.getByAccno(acc.getAccno());
		System.out.println(a);		
		return a.getTransactions();
	}

	public synchronized boolean addaccount(account account) {
		
		balancerepository.save(account);
	 	   return true;
	}
			
			
	
	
}
