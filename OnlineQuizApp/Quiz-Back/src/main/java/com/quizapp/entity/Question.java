package com.quizapp.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;


import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowQues.class)
public class Question{
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private long questionId;
  private String questionInfo;
  private String questionFacts;
  private String questionTime;
  
  @OneToMany(mappedBy="question",cascade=CascadeType.ALL)
  private List<QuestionOption> optionsList=new ArrayList<QuestionOption>();
  
  @OneToMany(mappedBy="question",cascade=CascadeType.ALL)
  private List<QuestionHint> hintsList=new ArrayList<QuestionHint>();
  
  
  @JsonView(Views.ShowQuiz.class)
  @ManyToMany(mappedBy="questionsList",cascade=CascadeType.PERSIST)
  List<Quiz> quizList=new ArrayList<Quiz>();  
  
	public long getQuestionId() {
		return questionId;
	}
	public void setQuestionId(long questionId) {
		this.questionId = questionId;
	}
	public String getQuestionInfo() {
		return questionInfo;
	}
	public void setQuestionInfo(String questionInfo) {
		this.questionInfo = questionInfo;
	}
	public String getQuestionFacts() {
		return questionFacts;
	}
	public void setQuestionFacts(String questionFacts) {
		this.questionFacts = questionFacts;
	}
	public String getQuestionTime() {
		return questionTime;
	}
	public void setQuestionTime(String questionTime) {
		this.questionTime = questionTime;
	}
	  
	public List<Quiz> getQuizList() {
		return quizList;
	}
	public void setQuizList(List<Quiz> quizList) {
		this.quizList = quizList;
	}
	public List<QuestionOption> getOptionsList() {
		return optionsList;
	}
	public void setOptionsList(List<QuestionOption> optionsList) {
		this.optionsList = optionsList;
	}
	public List<QuestionHint> getHintsList() {
		return hintsList;
	}
	public void setHintsList(List<QuestionHint> hintsList) {
		this.hintsList = hintsList;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) questionId;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Question other = (Question) obj;
		if (questionId != other.questionId)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Question [questionId=" + questionId + ", questionInfo=" + questionInfo + ", questionFacts="
				+ questionFacts + ", questionTime=" + questionTime + "]";
	}
	
  
}
