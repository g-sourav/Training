package com.container.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="cart")
public class cartdetails implements Serializable {
	
private static final long serialVersionUID = 1L;
@Id
private String cartid;
private String userName;
private String productId;
private String productName;
private float price;
private String imgSource;
public String getCartid() {
	return cartid;
}
public void setCartid(String cartid) {
	this.cartid = cartid;
}
public String getUserName() {
	return userName;
}
public void setUserName(String userName) {
	this.userName = userName;
}
public String getProductId() {
	return productId;
}
public void setProductId(String productId) {
	this.productId = productId;
}
public String getProductName() {
	return productName;
}
public void setProductName(String productName) {
	this.productName = productName;
}
public float getPrice() {
	return price;
}
public void setPrice(float price) {
	this.price = price;
}
public String getImgSource() {
	return imgSource;
}
public void setImgSource(String imgSource) {
	this.imgSource = imgSource;
}
}
