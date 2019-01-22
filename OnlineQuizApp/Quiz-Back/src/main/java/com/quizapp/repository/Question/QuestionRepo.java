package com.quizapp.repository.Question;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.quizapp.entity.Question;
import com.quizapp.entity.Quiz;

@Repository
public interface QuestionRepo extends CrudRepository<Question, Long> {
	//public boolean saveAll(List<Question> question);
	//public Question getQuestionById(long questionId);
	@Query("select q from Quiz q where q.quizId=?1")
	public Quiz getQuizById(long quizId);

}
