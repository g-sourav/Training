package com.container.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.container.entity.LoginPojo;
import com.container.entity.userdetails;
import com.container.repository.LoginRepository;

@Service
public class LoginService implements ILoginService {
	@Autowired
	private LoginRepository repo;

	public List<userdetails> getuserdetailsByuserName(String userName) {
		List<userdetails> userlist = new ArrayList<>();
		repo.findByUserName(userName).forEach(e -> userlist.add(e));
		return userlist;
	}

	public synchronized boolean addUser(userdetails user) {
		List<userdetails> list = repo.findByUserName(user.getUserName());
		if (list.size() > 0) {
			return false;
		} else {
			repo.save(user);
			return true;
		}
	}

	public LoginPojo FindUser(userdetails user) {
		LoginPojo pojo = new LoginPojo();

		try {

			userdetails a = repo.findByUserNameAndPassword(user.getUserName(), user.getPassword());

			if (a.getPassword().equals(user.getPassword())) {

				pojo.setUserName(a.getUserName());
				pojo.setOrderInCart(a.getOrderInCart());
				pojo.setStatus("true");
				System.out.println("login Successful");
			} else {

				System.out.println("incorrect username passowrd");
				pojo.setStatus("false");
			}
		} catch (Exception e) {
			System.out.println("incorrect username passowrd");

		}

		return pojo;
	}

	public void updateuser(userdetails userdetails) {

		repo.save(userdetails);

	}

	public void deleteuser(String userName) {
		repo.deleteById(userName);
	}

	@Override
	public userdetails getuserById(String userName) {
		userdetails user = repo.findById(userName).get();
		return user;
	}
}
