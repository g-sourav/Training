package com.concretepage.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.concretepage.entity.Transactions;
import com.concretepage.entity.account;

public interface TransactionsRepository  extends CrudRepository<Transactions, Long> {

}
