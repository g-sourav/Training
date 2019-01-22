package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegisterService implements RegisterServiceInterface {
	@Autowired
	RegisterRepository register;
	@Override
	public Register getRegisterById(int registerId) {
		// TODO Auto-generated method stub
		return register.findById(registerId).get();
	}

	@Override
	public boolean addUser(Register reg) {
		// TODO Auto-generated method stub
		register.save(reg);
  	   return true;
	}

	@Override
	public void updateUser(Register reg) {
		// TODO Auto-generated method stub
		register.save(reg);
	 
	}

	@Override
	public void deleteUser(int registerId) {
		// TODO Auto-generated method stub
        register.deleteById(registerId);
	}

	@Override
	public Register getbyname(String name) {
		// TODO Auto-generated method stub
		return register.findByEmail(name);
	}

}
