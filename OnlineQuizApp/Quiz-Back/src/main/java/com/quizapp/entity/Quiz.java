package com.quizapp.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowQuiz.class)
public class Quiz {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long quizId;
	private String quizTitle;
	private String quizCategory;
	private String quizType;
	private String quizDifficulty_level;
	private  String quizReference;
	private String quizCode;
	private Date quizValidUpto;
	private int creditPoints;
	private long creatorId;
	private boolean quizStatus;
	
	@CreationTimestamp
	private Date quizCreatedTime;
	
	
	@JsonView(Views.ShowUser.class)
	@ManyToMany(mappedBy="quizzes")
	private List<User> users = new ArrayList<User>();
	
	@ManyToMany(cascade=CascadeType.PERSIST)
	@JsonView(Views.ShowQues.class)
	private List<Question> questionsList=new ArrayList<Question>();
	
	@OneToMany(mappedBy="quiz")
	@JsonView(Views.ShowUser.class)
	private List<Results> results = new ArrayList<Results>();
	
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
	
	public Date getQuiz_created_time() {
		return quizCreatedTime;
	}
	public void setQuiz_created_time(Date quizCreatedTime) {
		this.quizCreatedTime = quizCreatedTime;
	}
	public boolean isQuiz_status() {
		return quizStatus;
	}
	public void setQuiz_status(boolean quizStatus) {
		this.quizStatus = quizStatus;
	}
	public void addUser(User u){
		this.users.add(u);

	}
	public List<Results> getResults() {
		return results;
	}
	public void setResults(List<Results> results) {
		this.results = results;
	}
	public void addResult(Results r){
		this.results.add(r);
		r.setQuiz(this);
	}
	public Long getQuizId() {
		return quizId;
	}
	public void setQuizId(Long quizId) {
		this.quizId = quizId;
	}
	public String getQuizTitle() {
		return quizTitle;
	}
	public void setQuizTitle(String quizTitle) {
		this.quizTitle = quizTitle;
	}
	public String getQuizCategory() {
		return quizCategory;
	}
	public void setQuizCategory(String quizCategory) {
		this.quizCategory = quizCategory;
	}
	public String getQuizType() {
		return quizType;
	}
	public void setQuizType(String quizType) {
		this.quizType = quizType;
	}
	public String getQuizDifficulty_level() {
		return quizDifficulty_level;
	}
	public void setQuizDifficulty_level(String quizDifficulty_level) {
		this.quizDifficulty_level = quizDifficulty_level;
	}
	public String getQuizReference() {
		return quizReference;
	}
	public void setQuizReference(String quizReference) {
		this.quizReference = quizReference;
	}
	public String getQuizCode() {
		return quizCode;
	}
	public void setQuizCode(String quizCode) {
		this.quizCode = quizCode;
	}
	public Date getQuizValidUpto() {
		return quizValidUpto;
	}
	public void setQuizValidUpto(Date quizValidUpto) {
		this.quizValidUpto = quizValidUpto;
	}
	public int getCreditPoints() {
		return creditPoints;
	}
	public void setCreditPoints(int creditPoints) {
		this.creditPoints = creditPoints;
	}
	public long getCreatorId() {
		return creatorId;
	}
	public void setCreatorId(long creatorId) {
		this.creatorId = creatorId;
	}
	public Date getQuizCreatedTime() {
		return quizCreatedTime;
	}
	public void setQuizCreatedTime(Date quizCreatedTime) {
		this.quizCreatedTime = quizCreatedTime;
	}
	public boolean isQuizStatus() {
		return quizStatus;
	}
	public void setQuizStatus(boolean quizStatus) {
		this.quizStatus = quizStatus;
	}
	public List<Question> getQuestionsList() {
		return questionsList;
	}
	public void setQuestionsList(List<Question> questionsList) {
		this.questionsList = questionsList;
	}
	@Override
	public String toString() {
		return "Quiz [quizId=" + quizId + ", quizTitle=" + quizTitle + ", quizCategory=" + quizCategory + ", quizType="
				+ quizType + ", quizDifficulty_level=" + quizDifficulty_level + ", quizReference=" + quizReference
				+ ", quizCode=" + quizCode + ", quizValidUpto=" + quizValidUpto + ", creditPoints=" + creditPoints
				+ ", creatorId=" + creatorId + ", quizStatus=" + quizStatus + ", quizCreatedTime=" + quizCreatedTime
				+ "]";
	}

}
