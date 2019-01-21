package com.onlineTest.Service;

import com.onlineTest.Pojo.StudentPojo;

public interface IStudentService 
{
	void registerStudentService(StudentPojo student);
	StudentPojo getStudentService(String email, String password);
}
