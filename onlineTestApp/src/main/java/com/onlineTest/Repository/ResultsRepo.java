package com.onlineTest.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.onlineTest.Entity.Results;
import com.onlineTest.Pojo.ResultsPojo;

public interface ResultsRepo extends JpaRepository<Results,Integer> 
{
	@Query("from Results where ename=?1 and email=?2")
	Results displayResultsRepo(String testName, String user);
}
