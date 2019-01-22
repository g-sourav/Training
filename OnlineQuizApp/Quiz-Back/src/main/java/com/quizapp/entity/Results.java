package com.quizapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowQuiz.class)
public class Results {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long resultId;
	private int score;
	
	@ManyToOne
	@JoinColumn(name="quizId")
	@JsonView(Views.ShowResults.class)
	private Quiz quiz;
	
	@ManyToOne
	@JoinColumn(name="userId")
	@JsonView(Views.ShowResults.class)
	private User user;
	
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public Quiz getQuiz() {
		return quiz;
	}
	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public long getResultId() {
		return resultId;
	}
	public void setResultId(long resultId) {
		this.resultId = resultId;
	}
}
