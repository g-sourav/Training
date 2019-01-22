package com.quizapp.repository.Quiz;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.quizapp.entity.Quiz;
import com.quizapp.entity.User;

public interface QuizRepository extends CrudRepository<Quiz,Long> {
	
	List<Quiz> findByUsers(User u);
	List<Quiz> findByQuizCategory(String quizCategory);
	public Quiz findByQuizCode(String quizCode);
	public List<Quiz> findQuizByCreatorIdAndQuizCategory(long creatorId,String quizCategory);
	@Query("select distinct q.quizCategory from Quiz q")
	List<String> findDistinctQuizCategory();
	
}
