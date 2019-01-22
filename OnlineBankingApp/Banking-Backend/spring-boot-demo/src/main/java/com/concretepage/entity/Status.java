package com.concretepage.entity;


public class Status {
	private boolean authenticated;
	private Signup signup;
	private account acc;
	private boolean adminauthenticated;

	

	public boolean isAdminauthenticated() {
		return adminauthenticated;
	}

	public void setAdminauthenticated(boolean adminauthenticated) {
		this.adminauthenticated = adminauthenticated;
	}

	public boolean isAuthenticated() {
		return authenticated;
	}

	public void setAuthenticated(boolean authenticated) {
		this.authenticated = authenticated;
	}

	public Signup getSignup() {
		return signup;
	}

	public void setSignup(Signup signup) {
		this.signup = signup;
	}

	public account getAcc() {
		return acc;
	}

	public void setAcc(account acc) {
		this.acc = acc;
	}

	

}
