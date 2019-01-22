package com.test.contoller;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="MyFormData")
public class MyFormData {
@Id
@GeneratedValue(strategy=GenerationType.AUTO)
private int	id;
private String title;
private String theater;
private int rate;
private String time;
private String description;
private int seats;
@JsonIgnore
@OneToMany(mappedBy="movie")
List<Show> showList = new ArrayList<Show>();

public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public int getSeats() {
	return seats;
}
public void setSeats(int seats) {
	this.seats = seats;
}
public String getTime() {
	return time;
}
public void setTime(String time) {
	this.time = time;
}
//show:boolean;
private String coverimagetitle;
//@Lob
//private byte[] coverimage;
private String cast1name;
//@Lob
//private byte[]  cast1image;
private String cast2name;
//@Lob
//private byte[]cast2image;
private String cast3name;
//@Lob
//private byte[]cast3image;
private String cast4name;
//@Lob
//private byte[]cast4image;
//public MultipartFile[] files;
//public MultipartFile[] getFiles() {
//	return files;
//}
//public void setFiles(MultipartFile[] files) {
//	this.files = files;
//}
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
public String getTheater() {
	return theater;
}
public void setTheater(String theater) {
	this.theater = theater;
}
public int getRate() {
	return rate;
}
public void setRate(int rate) {
	this.rate = rate;
}
public String getCoverimagetitle() {
	return coverimagetitle;
}
public void setCoverimagetitle(String coverimagetitle) {
	this.coverimagetitle = coverimagetitle;
}
//public byte[] getCoverimage() {
//	return coverimage;
//}
//public void setCoverimage(byte[] coverimage) {
//	this.coverimage = coverimage;
//}
public String getCast1name() {
	return cast1name;
}
public void setCast1name(String cast1name) {
	this.cast1name = cast1name;
}
//public byte[] getCast1image() {
//	return cast1image;
//}
//public void setCast1image(byte[] cast1image) {
//	this.cast1image = cast1image;
//}
public String getCast2name() {
	return cast2name;
}
public void setCast2name(String cast2name) {
	this.cast2name = cast2name;
}
//public byte[] getCast2image() {
//	return cast2image;
//}
//public void setCast2image(byte[] cast2image) {
//	this.cast2image = cast2image;
//}
public String getCast3name() {
	return cast3name;
}
public void setCast3name(String cast3name) {
	this.cast3name = cast3name;
}
//public byte[] getCast3image() {
//	return cast3image;
//}
//public void setCast3image(byte[] cast3image) {
//	this.cast3image = cast3image;
//}
public String getCast4name() {
	return cast4name;
}
public void setCast4name(String cast4name) {
	this.cast4name = cast4name;
}
//public byte[] getCast4image() {
//	return cast4image;
//}
//public void setCast4image(byte[] cast4image) {
//	this.cast4image = cast4image;
//}
	void addShow(Show s1){
		this.showList.add(s1);
		s1.setMovie(this);
	}
}
