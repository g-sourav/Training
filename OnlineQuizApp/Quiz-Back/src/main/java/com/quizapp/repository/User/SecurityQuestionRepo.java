package com.quizapp.repository.User;

import org.springframework.data.repository.CrudRepository;

import com.quizapp.entity.SecurityQuestion;

public interface SecurityQuestionRepo extends CrudRepository<SecurityQuestion, Integer> {

}
