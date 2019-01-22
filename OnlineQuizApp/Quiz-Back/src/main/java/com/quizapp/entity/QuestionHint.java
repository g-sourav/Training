package com.quizapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowQues.class)
public class QuestionHint {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long hintId;
    private String hintInfo;
    
    @JsonView(Views.OptionHint.class)
    @ManyToOne
    @JoinColumn(name="Ques_id")
	private Question question;
    
    @JsonIgnore
	public Question getQuestions() {
		return question;
	}
	public void setQuestions(Question questions) {
		this.question = questions;
	}
	public long getHintId() {
		return hintId;
	}
	public void setHintId(long hintId) {
		this.hintId = hintId;
	}
	public String getHintInfo() {
		return hintInfo;
	}
	public void setHintInfo(String hintInfo) {
		this.hintInfo = hintInfo;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
}
