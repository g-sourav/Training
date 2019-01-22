package com.test.contoller;



public interface RegisterServiceInterface {
	 Register getRegisterById(int registerId);
     boolean addUser(Register reg);
     void updateUser(Register register);
     void deleteUser(int registerId);
     Register getbyname(String name);
}
