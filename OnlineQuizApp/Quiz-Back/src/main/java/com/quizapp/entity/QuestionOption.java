package com.quizapp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowQues.class)
public class QuestionOption {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private long optionId;
    private String optionInfo;
    private boolean answerStatus;
    @JsonView(Views.OptionHint.class)
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="question_id")
	private Question question;
    
    public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public long getOptionId() {
		return optionId;
	}
	public void setOptionId(long optionId) {
		this.optionId = optionId;
	}
	public String getOptionInfo() {
		return optionInfo;
	}
	public void setOptionInfo(String optionInfo) {
		this.optionInfo = optionInfo;
	}
	public boolean isAnswerStatus() {
		return answerStatus;
	}
	public void setAnswerStatus(boolean answerStatus) {
		this.answerStatus = answerStatus;
	}
}
