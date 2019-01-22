package com.container.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.container.entity.LoginPojo;
import com.container.entity.userdetails;
import com.container.service.ILoginService;

@CrossOrigin(origins = "http://10.223.99.44:8080")
@Controller
@RequestMapping("user")
public class LoginController {
	@Autowired
	private ILoginService loginService;
	
	
	@PostMapping("adduserdetails")
	public ResponseEntity<Void> adduserdetails(@RequestBody userdetails user, UriComponentsBuilder builder) {
		System.out.println("method will be called");
        boolean flag = loginService.addUser(user);
        System.out.println("method called");
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/user/{id}").buildAndExpand(user.getUserName()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	
	@PostMapping("getuserdetails")
	public ResponseEntity<LoginPojo> getuserdetails(@RequestBody userdetails user, UriComponentsBuilder builder) {
        LoginPojo pojo = loginService.FindUser(user);
        return new ResponseEntity<LoginPojo>(pojo, HttpStatus.OK);
  
	}
	
	
	@GetMapping("user/{userName}")
	public ResponseEntity<List<userdetails>>getUser(@PathVariable("userName") String userName) {
	    List<userdetails> userlist = loginService.getuserdetailsByuserName(userName);
		return new ResponseEntity<List<userdetails>>(userlist, HttpStatus.OK);
	}
	
	@GetMapping("edituser/{userName}")
	public ResponseEntity<List<userdetails>>geteditUser(@PathVariable("userName") String userName) {
	    List<userdetails> userlist = loginService.getuserdetailsByuserName(userName);
		return new ResponseEntity<List<userdetails>>(userlist, HttpStatus.OK);
	}
	@GetMapping("editsingleuser/{userName}")
	public ResponseEntity <userdetails> getuserById(@PathVariable("userName") String userName){
		userdetails userdetail= loginService.getuserById(userName);
		return new ResponseEntity<userdetails>(userdetail, HttpStatus.OK);
		
	}
	
	
	@PutMapping("edit")
	public ResponseEntity<userdetails> updateuser(@RequestBody userdetails userdetails){
		
		loginService.updateuser(userdetails);
		return new ResponseEntity<userdetails>(userdetails, HttpStatus.OK);
	}
		
	@DeleteMapping("delete/{userName}")
	public ResponseEntity<Void> deleteuser(@PathVariable("userName") String userName){
		loginService.deleteuser(userName);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		
		
	}
	
}