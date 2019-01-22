package com.quizapp.repository.Question;

import org.springframework.data.repository.CrudRepository;

import com.quizapp.entity.QuestionHint;

public interface HintRepo  extends CrudRepository<QuestionHint,Long>{

}
