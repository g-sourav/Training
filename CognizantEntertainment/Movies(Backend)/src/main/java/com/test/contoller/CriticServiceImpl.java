package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CriticServiceImpl implements CriticInterface{
	@Autowired
   private CriticRepo criticRepo;
	@Override
	public boolean addCritic(CriticAdmin form) {
		// TODO Auto-generated method stub
		criticRepo.save(form);
		return true;
	}

	@Override
	public CriticAdmin getFormByTitle(String Tit) {
		// TODO Auto-generated method stub
		return criticRepo.findByTitle(Tit);
	}

}
