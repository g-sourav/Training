package com.quizapp.service.Results;

import java.util.List;

import com.quizapp.entity.Results;

public interface IResultService {
	
	List<Results> getResultByQuiz(String email, long quizId);
	
}
