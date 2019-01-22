package com.test.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShowService  {
	@Autowired
	ShowRepo repo;
	@Autowired
	BookRepo bk;
	@Autowired
	SeatRepo sr;
	@Autowired
	ImageRepo img;
	
	public void save(Show s){
		repo.save(s);
	}
	public Show getById(Integer id){
		return repo.findById(id).get();
	}
	public void delete(Integer id){
		repo.deleteById(id);
	}
	public List<Show> getAll(){
		return (List<Show>)repo.findAll();
	}
	public List<Show> getByDate(String date){
		return repo.findAllByDate(date);
	}
	public List<Show> getByMovie(int id){
		MyFormData movie = img.findById(id).get();
		return repo.findAllByMovie(movie);
	}
	public void bookSave(BookTicket bt){
		bk.save(bt);
	}
	public List<BookTicket> getBook(Show s){
		return bk.findAllByShows(s);
	}
	public void saveSeat(Seats s){
		sr.save(s);
	}
}
