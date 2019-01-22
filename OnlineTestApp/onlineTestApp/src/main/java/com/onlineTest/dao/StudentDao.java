package com.onlineTest.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.onlineTest.Entity.Results;
import com.onlineTest.Entity.Student;
import com.onlineTest.Pojo.ResultsPojo;
import com.onlineTest.Pojo.StudentPojo;
import com.onlineTest.Repository.ResultsRepo;
import com.onlineTest.Repository.StudentRepo;

@Repository
@Transactional
public class StudentDao 
{
	@Autowired
	private StudentRepo studRepo;
	@Autowired
	private ResultsRepo resultsRepo;
	
	public StudentPojo registerStudentDao(StudentPojo stud)
	{
		Student student = new Student();
		if(studRepo.existsById(stud.getEmail())){
			stud=new StudentPojo();
		}else{
			student.setEmail(stud.getEmail());
			student.setName(stud.getName());
			student.setPassword(stud.getPassword());
			student.setPhone(stud.getPhone());
			student.setAge(stud.getAge());
			student.setGender(stud.getGender());
			student.setQualification(stud.getQualification());
			student.setCity(stud.getCity());
			
			studRepo.save(student);
		}
		return stud;
	}
	
	public StudentPojo getStudentDao(String email, String password)
	{
		Student student= studRepo.findById(email).orElse(new Student());
		
		StudentPojo stud = new StudentPojo();
		
		if(password.equals(student.getPassword()))
		{
			
			stud.setEmail(student.getEmail());
			stud.setName(student.getName());
			stud.setPassword(student.getPassword());
			stud.setPhone(student.getPhone());
			stud.setAge(student.getAge());
			stud.setGender(student.getGender());
			stud.setQualification(student.getQualification());
			stud.setCity(student.getCity());
		}
	
		return stud;
	}
	public StudentPojo getStudentDetailsDao(String email)
	{
		Student student= studRepo.findById(email).get();
		
		StudentPojo stud = new StudentPojo();
		
			stud.setEmail(student.getEmail());
			stud.setName(student.getName());
			stud.setPassword(student.getPassword());
			stud.setPhone(student.getPhone());
			stud.setAge(student.getAge());
			stud.setGender(student.getGender());
			stud.setQualification(student.getQualification());
			stud.setCity(student.getCity());
	
		return stud;
	}
	public StudentPojo updateStudentDao(StudentPojo stud)
	{
		Student student = new Student();
		
			student.setEmail(stud.getEmail());
			student.setName(stud.getName());
			student.setPassword(stud.getPassword());
			student.setPhone(stud.getPhone());
			student.setAge(stud.getAge());
			student.setGender(stud.getGender());
			student.setQualification(stud.getQualification());
			student.setCity(stud.getCity());
			
			studRepo.save(student);
		return stud;
	}
	
	public List<String> getAvailableTestsDao(String email)
	{
		return studRepo.getAvailableTestsRepo(email);
	}
	
	public List<ResultsPojo> getResultsDao(String email)
	{
		List<Results> entityList=studRepo.getResultsRepo(email);
		List<ResultsPojo> pojoList= new ArrayList<ResultsPojo>();
		ResultsPojo rpojo;
		for(Results results:entityList){
			rpojo=new ResultsPojo();
			rpojo.setEmail(results.getEmail());
			rpojo.setEname(results.getEname());
			rpojo.setMarks(results.getMarks());
			pojoList.add(rpojo);
		}
		return pojoList;
	}
	
	public ResultsPojo insertResultsDao(ResultsPojo rPojo)
	{
		Results results = new Results();
		
		results.setEmail(rPojo.getEmail());
		results.setEname(rPojo.getEname());
		results.setMarks(rPojo.getMarks());
		
		resultsRepo.save(results);
		
		return rPojo;
	}
	
	public ResultsPojo displayResultsDao(String testName, String user)
	{
		ResultsPojo rPojo = new ResultsPojo();
		
		Results results = resultsRepo.displayResultsRepo(testName, user);
		
		rPojo.setEmail(results.getEmail());
		rPojo.setEname(results.getEname());
		rPojo.setMarks(results.getMarks());
		
		return rPojo;
	}
}
