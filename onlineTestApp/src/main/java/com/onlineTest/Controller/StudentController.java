package com.onlineTest.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.onlineTest.Pojo.ResultsPojo;
import com.onlineTest.Pojo.StudentPojo;
import com.onlineTest.Service.StudentService;

@Controller
@CrossOrigin(origins="http://10.223.99.44:8080")
@RequestMapping("controller")
public class StudentController 
{
	@Autowired
	private StudentService studService;
	
	@RequestMapping("/")
	public String home()
	{
		return "index";
	}
	
	@PostMapping("register")
	@ResponseBody
	public StudentPojo registerStudent(@RequestBody StudentPojo student)
	{
		return studService.registerStudentService(student);
	}
	
	@PostMapping("login")
	@ResponseBody
	public StudentPojo loginStudent(@RequestBody StudentPojo stud)
	{
		stud = studService.getStudentService(stud.getEmail(),stud.getPassword());
		return stud;		
	}
	
	@GetMapping("getDetails/{id}")
	@ResponseBody
	public StudentPojo getStudentDetails(@PathVariable("id") String email)
	{
		return studService.getStudentDetailsService(email);		
	}
	
	@PutMapping("update")
	@ResponseBody
	public StudentPojo updateStudent(@RequestBody StudentPojo stud){
		return studService.updateStudentService(stud);
	}
	
	@GetMapping("exams/{id}")
	@ResponseBody
	public List<String> getAvailableTests(@PathVariable("id") String email)
	{		
		return studService.getAvailableTestsService(email);		
	}
	
	@GetMapping("results/{id}")
	@ResponseBody
	public List<ResultsPojo> getResults(@PathVariable("id") String email)
	{	
		return studService.getResultsService(email);	
	}
	
	@GetMapping("displayResults/{test}/{id}")
	@ResponseBody
	public ResultsPojo displayResults(@PathVariable("test") String testName,@PathVariable("id") String user)
	{
		return studService.displayResultsService(testName,user);
	}
}
