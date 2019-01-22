package com.test.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("MyMovies")
public class RegisterController {
	@Autowired
	private RegisterServiceInterface regservice;
	
	@PostMapping("/register")
	public ResponseEntity<Register> SaveUsers(@RequestBody Register r){
		regservice.addUser(r);
		return new ResponseEntity(r,HttpStatus.OK);
	}
	
	@PostMapping("auth")
	public ResponseEntity<Register> AuthLogin(@RequestBody  User user ){
		String username=user.email;
		String password=user.password;
				Register use=regservice.getbyname(user.getEmail());
		if(use==null){
			return new ResponseEntity(user,HttpStatus.CONFLICT);
		}
		else{
			if(user.getPassword().equals(use.getPassword()))
				return new ResponseEntity(use,HttpStatus.OK);
			else
				return new ResponseEntity(user,HttpStatus.BAD_REQUEST);
		}
	}
	@GetMapping("unique/{name}")
	public ResponseEntity<Register> checkUnique(@PathVariable("name")String name){
		Register reg = regservice.getbyname(name);
		if(reg.equals(null))
			return new ResponseEntity(null,HttpStatus.OK);
		else
			return new ResponseEntity(reg,HttpStatus.TOO_MANY_REQUESTS);
		
	}
}
