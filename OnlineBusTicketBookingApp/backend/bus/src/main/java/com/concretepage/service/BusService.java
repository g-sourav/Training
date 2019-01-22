package com.concretepage.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.concretepage.entity.BookingTable;
import com.concretepage.entity.BusList;
import com.concretepage.entity.CustomerDetails;
import com.concretepage.entity.SeatsList;
import com.concretepage.entity.login;

import com.concretepage.repository.BookingRepository;
import com.concretepage.repository.BusListRepository;
import com.concretepage.repository.CusRepository;
import com.concretepage.repository.SeatsRepository;

@Service
public class BusService implements IBusService {
	@Autowired
	private CusRepository cusRepository;
	@Autowired
	private BusListRepository busListRepository;
	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private SeatsRepository seatsRepository;
	String seatnumbers;
	public CustomerDetails getUserByEmailId(String EmailId) {
		CustomerDetails obj = cusRepository.findByMailId(EmailId).get();
		return obj;
	}	
	public BookingTable getBookingByTktNo(long TktNo) {
		BookingTable obj = bookingRepository.findByTicketNumber(TktNo).get();
		return obj;
	}	

	public List<BusList> getAllBusses(){
		List<BusList> list = new ArrayList<>();
		busListRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	public synchronized boolean register(CustomerDetails cusDetails){
	   List<CustomerDetails> list = cusRepository.findByMailIdAndPassword(cusDetails.getMailId(), cusDetails.getPassword()); 	
       if (list.size() > 0) {
    	   return false;
       } else {
    	   cusRepository.save(cusDetails);
    	   return true;
       }
	}
	
	public synchronized boolean login(login login){
		   List<CustomerDetails> list = cusRepository.findByMailIdAndPassword(login.getEmailId(), login.getPassword()); 	
	       if (list.size() > 0) {
	    	   return true;
	       } else {
	    	  
	    	   return false;
	       }
		}
	public void updateUser(CustomerDetails cusDetails ) {
		
		cusRepository.save(cusDetails);
	}
	
	public void deleteUser(String EmailId) {
		cusRepository.delete(getUserByEmailId(EmailId));
	}
	
	public Set<SeatsList> GetSeat(long busNo){
		Set<SeatsList> lists =  new HashSet<>();
		Set<SeatsList> list =  new HashSet<>();

		BusList busList = busListRepository.findByBusNumber(busNo);
		lists = busList.getSeats();
        for(SeatsList a  :lists){
        	
        	  a.setBusList(null);
        	  list.add(a);
        }
		return list;
	}
	public List<BookingTable> getBookingList(String EmailId){
		List<BookingTable> list = new ArrayList<>();
		bookingRepository.findByMailId(EmailId).forEach(e -> list.add(e));
		return list;
	}
	
	public boolean book(BookingTable bookingTable){
		List<BookingTable> list = bookingRepository.findByMailIdAndSeatNumber(bookingTable.getMailId(),bookingTable.getSeatNumber());
		getseatings(bookingTable.getSeatNumber(),bookingTable.getBusNumber());
		if (list.size() > 0) {
	    	   return false;
	       } else {
		
		bookingRepository.save(bookingTable);
	    	   return true;
	       }
		
	}		
	
	public void deleteBook(long TktNo) {
		bookingRepository.delete(getBookingByTktNo(TktNo));
	}
	
	public void getseatings(String s,String b) {
		int intarray[] = new int[50];
        String strarray[] = new String[50];
        int count,c;
        strarray = s.split(",");
        long bus=Long.parseLong(b);
        for (count = 0; count < strarray.length ; count++) {
            intarray[count] = Integer.parseInt(strarray[count]);
        
              if(intarray[count]>=1 && intarray[count]<60){
            	  
              List<SeatsList> seat= seatsRepository.findBySeatNumber(intarray[count]);
              for(SeatsList a  :seat){
  
              if(a.getBusList().getBusNumber()==bus){
               a.setAvailability(true);
               seatsRepository.save(a);
                    }
                 }
              }
           
        }
      	
	}
	
	
}
