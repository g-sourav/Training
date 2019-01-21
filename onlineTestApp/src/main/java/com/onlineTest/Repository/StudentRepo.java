package com.onlineTest.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.onlineTest.Entity.Results;
import com.onlineTest.Entity.Student;


public interface StudentRepo extends JpaRepository<Student,String>
{
	
	@Query("Select t.ename from Test t where t.ename not in (Select ename from Results r where r.email=?1)")
	List<String> getAvailableTestsRepo(String email);
	@Query("from Results r where r.email=?1")
	List<Results> getResultsRepo(String email);
}

