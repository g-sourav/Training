package com.quizapp.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="securityQuestion")
public class SecurityQuestion {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int securityquestionid;
	private String securityquestion;
	
	public SecurityQuestion() {
	}
	public int getSecurityquestionid() {
		return securityquestionid;
	}
	public void setSecurityquestionid(int securityquestionid) {
		this.securityquestionid = securityquestionid;
	}
	public String getSecurityquestion() {
		return securityquestion;
	}
	public void setSecurityquestion(String securityquestion) {
		this.securityquestion = securityquestion;
	}
	

}
