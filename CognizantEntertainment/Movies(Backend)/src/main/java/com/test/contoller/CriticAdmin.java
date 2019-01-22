package com.test.contoller;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class CriticAdmin {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="critic_admin")
	private int id;
	String title;
	String critic;
	String review;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getCritic() {
		return critic;
	}
	public void setCritic(String critic) {
		this.critic = critic;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
}
