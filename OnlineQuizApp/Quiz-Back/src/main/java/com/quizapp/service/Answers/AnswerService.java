package com.quizapp.service.Answers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.entity.QuestionOption;
import com.quizapp.entity.Quiz;
import com.quizapp.entity.Results;
import com.quizapp.entity.User;
import com.quizapp.entity.UserAnswers;
import com.quizapp.repository.Answers.UserAnswersRepo;
import com.quizapp.repository.Question.OptionRepo;
import com.quizapp.repository.Question.QuestionRepo;
import com.quizapp.repository.Quiz.QuizRepository;
import com.quizapp.repository.Results.ResultsRepository;
import com.quizapp.repository.User.UserRepository;

@Service
public class AnswerService {
	@Autowired
	private UserAnswersRepo userAnswerRepository;
	@Autowired
	private QuizRepository quizRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private QuestionRepo quesRepo;
	@Autowired
	private OptionRepo optionRepo;
	@Autowired
	private ResultsRepository resultRepo;
	
	int score;
	
	public int addAnswersList(List<UserAnswers> answersList) {
		score=0;
		UserAnswers ans = answersList.get(0);
		User user = userRepo.findById(ans.getUserId()).get();
		Quiz quiz = quizRepo.findById(ans.getQuizId()).get();
		user.addQuiz(quiz);
		quiz.addUser(user);
		answersList.stream().forEach(answers->{
			userAnswerRepository.save(answers);
			List<QuestionOption> correctOption = optionRepo.findQuestionOptionByQuestion(
					quesRepo.findById(answers.getQuestionId()).get());
			correctOption.stream().forEach(option->{
				if(option.getOptionId()==answers.getOptionId())
					score++;
			});
		});
		Results result = new Results();
		result.setScore(score);
		result.setQuiz(quiz);
		result.setUser(user);
		resultRepo.save(result);
		return score;
		}
	
}
