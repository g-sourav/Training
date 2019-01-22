package com.quizapp.service.Question;

import java.util.List;

import com.quizapp.entity.Question;

public interface QuestionServiceInterface {
	String addQuestionsList(List<Question> questionsList,long quizId);
	List<Question> getQuestionsListByQuizId(long quizId);
}
