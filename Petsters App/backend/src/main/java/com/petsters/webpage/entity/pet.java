package main.java.com.petsters.webpage.entity;

import java.io.Serializable;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="pet")
public class pet implements Serializable { 
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="pet_id")
    private long pet_id;  
	@Column(name="pet_name")
    private String pet_name;
	@Column(name="category")	
	private String category;
	@Column(name="breed")	
	private String breed;
	@Column(name="age")	
	private int age;
	@Column(name="gender")	
	private String gender;
	@Column(name="location")	
	private String location;
	@Column(name="sold")	
	private boolean sold;
	@Lob
	@Column(name="bio")	
	private String bio;
	@Lob
	private byte[] image;
	private float price;
	

	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
	public long getPet_id() {
		return pet_id;
	}
	public void setPet_id(long pet_id) {
		this.pet_id = pet_id;
	}
	public String getPet_name() {
		return pet_name;
	}
	public void setPet_name(String pet_name) {
		this.pet_name = pet_name;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getBreed() {
		return breed;
	}
	public void setBreed(String breed) {
		this.breed = breed;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public boolean isSold() {
		return sold;
	}
	public void setSold(boolean sold) {
		this.sold = sold;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	@Override
	public String toString() {
		return "pet [pet_id=" + pet_id + ", pet_name=" + pet_name + ", category=" + category + ", breed=" + breed
				+ ", age=" + age + ", gender=" + gender + ", location=" + location + ", sold=" + sold + ", bio=" + bio
				+ ", image=" + Arrays.toString(image) + "]";
	}
	


}
