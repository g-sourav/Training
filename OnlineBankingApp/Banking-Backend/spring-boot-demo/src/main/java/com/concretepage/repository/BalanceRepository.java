package com.concretepage.repository;



import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.account;

public interface BalanceRepository extends CrudRepository<account, String> {

	account findByaccno(String accno);
	account getByAccno(String accno);

}
