package com.test.contoller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@RequestMapping("book-app")
public class ShowController {
	@Autowired
	ShowService service;
	@Autowired
	private RegisterServiceInterface regservice;
	
	@GetMapping("getDetails/{id}")
	public ResponseEntity<List<Show>> showDetails(@PathVariable Integer id){
		System.out.println(id);
		List<Show> l2 = service.getByMovie(id);
 		return new ResponseEntity<List<Show>>(l2,HttpStatus.OK);
		
	}
	@PostMapping("book")
	public ResponseEntity<BookTicket> book(@RequestBody BookTicket bt){
		Register user= regservice.getbyname(bt.getUser().getEmail());
		Show s = service.getById(bt.getShow().getId());
		s.add(bt);
		user.addTicket(bt);
		service.bookSave(bt);
		for(Seats s1 : bt.getBookSeats()){
			if(s1.getIsBooked()==1&&s1.getIsChecked()==false){
			s.setAvailSeats(s.getAvailSeats()-1);
			s1.setBookTicket(bt);
			service.saveSeat(s1);
			}
			
		}
		
		return new ResponseEntity<BookTicket>(bt,HttpStatus.OK);
	}
	@GetMapping("getSeats/{showId}")
	public ResponseEntity<List<Seats>> getSeats(@PathVariable("showId")Integer sid){
		Show show = service.getById(sid);
		List<BookTicket> l1 = show.getBookList();
		List<Seats> l2 = new ArrayList<Seats>(10);
		for(int i=0;i<10;i++){
			Seats s = new Seats();
			s.setSeatNo(i+1);
			s.setIsBooked(0);
			l2.add(s);
		}
		if(!l1.isEmpty()){
		for(Seats s1:l2){
		for(BookTicket bk : l1){
			for(Seats s2 : bk.getBookSeats()){
				if(s2.getSeatNo()==s1.getSeatNo())
					if(s2.getIsBooked()==1){
						s1.setIsBooked(1);
						s1.setIsChecked(true);
					}
					else
						s1.setIsChecked(false);
						
			}
			}
		}
		}
		return new ResponseEntity<List<Seats>>(l2,HttpStatus.OK);
	}
}
