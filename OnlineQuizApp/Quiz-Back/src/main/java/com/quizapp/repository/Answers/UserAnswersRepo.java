package com.quizapp.repository.Answers;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.quizapp.entity.UserAnswers;
@Repository
public interface UserAnswersRepo extends CrudRepository<UserAnswers,Long> {

}
