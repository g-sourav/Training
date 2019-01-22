package com.concretepage.service;

import java.util.List;

import com.concretepage.entity.Addrecepient;
import com.concretepage.entity.Signup;
import com.concretepage.entity.Transactions;
import com.concretepage.entity.account;

public interface Ibankservice {
	
	 List<Signup> getAllUsers();
     boolean addUser(Signup signup);
     void updateUser(Signup signup);
     boolean addrecepient(Addrecepient addrecepient);
	Signup getByuid(int uid);
	account getByaccno(String accno);
	
	List<Addrecepient> getAllRecepients();
	void updatebalance(account account);
	void updatetransaction(Transactions tr);
	List<Transactions> getAllTransactions();
//	List<Transactions> getAllTransactionsbyAccnum(String accone);
	List<Transactions> getAllTransactionsbyaccount(account account );
	boolean addaccount(account account);
	
     

}
