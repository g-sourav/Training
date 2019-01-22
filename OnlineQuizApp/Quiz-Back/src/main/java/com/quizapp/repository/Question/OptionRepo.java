package com.quizapp.repository.Question;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.quizapp.entity.Question;
import com.quizapp.entity.QuestionOption;

public interface OptionRepo extends CrudRepository<QuestionOption,Long>{
	
	@Query("Select o from QuestionOption o where o.question=:ques and o.answerStatus=1")
	public List<QuestionOption> findQuestionOptionByQuestion(@Param("ques")Question question);
}
