package com.quizapp.service.Question;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.Question;
import com.quizapp.entity.QuestionHint;
import com.quizapp.entity.QuestionOption;
import com.quizapp.entity.Quiz;
import com.quizapp.repository.Question.HintRepo;
import com.quizapp.repository.Question.OptionRepo;
import com.quizapp.repository.Question.QuestionRepo;
import com.quizapp.repository.Quiz.QuizRepository;
@Service
public class QuestionService implements QuestionServiceInterface{
	@Autowired
	private QuestionRepo questionRepository;


	@Autowired
	private QuizRepository quizRepository;
	
	@Autowired
	private OptionRepo optionRepository;
	
	@Autowired
	private HintRepo hintRepository;
	
	public String addQuestionsList(List<Question> questionsList, long quizId) {
		Quiz quizEntity = quizRepository.findById(quizId).get();
		for (Question question : questionsList) {
			if (!questionRepository.findById(question.getQuestionId()).isPresent()) {
				for (int i = 0; i < question.getOptionsList().size(); i++) {
					QuestionOption option = question.getOptionsList().get(i);
					option.setQuestion(question);
					optionRepository.save(option);
				}
				for (int i = 0; i < question.getHintsList().size(); i++) {
					QuestionHint hint = question.getHintsList().get(i);
					hint.setQuestion(question);
					hintRepository.save(hint);
				}
				quizEntity.getQuestionsList().add(question);
				question.getQuizList().add(quizEntity);
				questionRepository.save(question);
			} else {
				questionRepository.findById(question.getQuestionId()).get().getQuizList().add(quizEntity);
				quizEntity.getQuestionsList().add(question);
				quizRepository.save(quizEntity);
				
			}
		}
		return quizEntity.getQuizCode();

	}

	public List<Question> getQuestionsListByQuizId(long quizId) {  
		Quiz quiz=questionRepository.getQuizById(quizId);
		return quiz.getQuestionsList();
	}
	
	
	
	
	public Set<Question> getQuestions(String quizCategory) {
		List<Quiz> quizes = quizRepository.findByQuizCategory(quizCategory);
		Set<Question> questions = new HashSet<Question>();
		for (Quiz quiz : quizes) {
			List<Question> ques = new ArrayList<Question>();
			ques = quiz.getQuestionsList();
			for (Question q : ques) {
				questions.add(q);
			}

		}

		return questions;
	}

	public Question getQuestionById(long id) {
		Question ques=questionRepository.findById(id).get();
		
			return ques;
	}

	public List<Question> getQuestionsByCode(String quizCode) {
        Quiz quiz= quizRepository.findByQuizCode(quizCode);  
        List<Question> ques= new ArrayList<Question>();
        ques= quiz.getQuestionsList();
		return ques;
	}
	
	public Set<Question> getQuestionsByCreatorIdAndCategory(long creatorId,String category){
		List<Quiz> quizList=quizRepository.findQuizByCreatorIdAndQuizCategory(creatorId, category);
		Set<Question> questionsSet=new HashSet<Question>();
		for(Quiz quiz:quizList){
			for(Question question:quiz.getQuestionsList()){
				questionsSet.add(question);
			}
		}
		return questionsSet;
	}
}
