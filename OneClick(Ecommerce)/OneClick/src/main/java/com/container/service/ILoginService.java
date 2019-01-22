package com.container.service;

import java.util.List;

import com.container.entity.LoginPojo;
import com.container.entity.userdetails;



public interface ILoginService {
	
	 boolean addUser(userdetails user);
	
	 List<userdetails> getuserdetailsByuserName(String userName);

	LoginPojo FindUser(userdetails user);
	
	void updateuser(userdetails userdetails);
	
    void deleteuser(String userName);
    
    userdetails getuserById (String userName);

}
