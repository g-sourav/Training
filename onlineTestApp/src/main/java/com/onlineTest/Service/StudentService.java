package com.onlineTest.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.onlineTest.Pojo.ResultsPojo;
import com.onlineTest.Pojo.StudentPojo;
import com.onlineTest.dao.StudentDao;

@Service
@Transactional
public class StudentService 
{
	@Autowired
	private StudentDao studDao;
	
	public StudentPojo registerStudentService(StudentPojo stud)
	{
		return studDao.registerStudentDao(stud);
	}
	
	public StudentPojo getStudentService(String email, String password)
	{
		StudentPojo stud = studDao.getStudentDao(email,password);
		return stud;
	}
	public StudentPojo getStudentDetailsService(String email)
	{
		return studDao.getStudentDetailsDao(email);
		
	}
	public StudentPojo updateStudentService(StudentPojo stud) {
		return studDao.updateStudentDao(stud);
		}
	
	public List<String> getAvailableTestsService(String email)
	{
		return studDao.getAvailableTestsDao(email);
	}
	
	public List<ResultsPojo> getResultsService(String email)
	{
		return studDao.getResultsDao(email);
	}
	
	public ResultsPojo insertResultsService(ResultsPojo rPojo)
	{
		return studDao.insertResultsDao(rPojo);
	}
	
	public ResultsPojo displayResultsService(String testName,String user)
	{
		return studDao.displayResultsDao(testName,user);
	}
}
