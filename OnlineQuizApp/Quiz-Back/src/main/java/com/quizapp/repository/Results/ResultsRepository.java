package com.quizapp.repository.Results;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.quizapp.entity.Quiz;
import com.quizapp.entity.Results;
import com.quizapp.entity.User;
@Repository
public interface ResultsRepository extends CrudRepository<Results, Long> {
	
	List<Results> findByQuiz(Quiz q);
	
	List<Results> findByQuizAndUser(Quiz q,User u);
	
	
}
