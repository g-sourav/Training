package com.quizapp.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonView;
import com.quizapp.Views.Views;

@Entity
@JsonView(Views.ShowUser.class)
@JsonIgnoreProperties(ignoreUnknown = true, value = {"userStatus"})
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long userId;
	private String userName;
	private String userEmail;
	private String userPassword;
	private String userGender;
	private boolean userStatus;
	private String userSecurityAnswer;
	private int userques;
	
	@ManyToMany
	@JsonView(Views.ShowQuiz.class)
	private List<Quiz> quizzes = new ArrayList<Quiz>();
	
	@OneToMany(mappedBy="user")
	@JsonView(Views.ShowResults.class)
	private List<Results> result = new ArrayList<Results>();
	
	public List<Quiz> getQuizzes() {
		return quizzes;
	}
	public void setQuizzes(List<Quiz> quizzes) {
		this.quizzes = quizzes;
	}
	
	public void addQuiz(Quiz q){
		this.quizzes.add(q);
		q.addUser(this);
	}
	public List<Results> getResult() {
		return result;
	}
	public void setResult(List<Results> result) {
		this.result = result;
	}
	public void addResult(Results r){
		this.result.add(r);
		r.setUser(this);
	}
	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public boolean isUserStatus() {
		return userStatus;
	}
	public void setUserStatus(boolean userStatus) {
		this.userStatus = userStatus;
	}
	public String getUserSecurityAnswer() {
		return userSecurityAnswer;
	}
	public void setUserSecurityAnswer(String userSecurityAnswer) {
		this.userSecurityAnswer = userSecurityAnswer;
	}
	public int getUserques() {
		return userques;
	}
	public void setUserques(int userques) {
		this.userques = userques;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userEmail=" + userEmail + ", userPassword="
				+ userPassword + ", userGender=" + userGender + ", userStatus=" + userStatus + ", userSecurityAnswer="
				+ userSecurityAnswer + "]";
	}

}
