package com.concretepage.service;

import java.util.List;
import java.util.Set;

import com.concretepage.entity.BookingTable;
import com.concretepage.entity.BusList;
import com.concretepage.entity.CustomerDetails;
import com.concretepage.entity.SeatsList;
import com.concretepage.entity.login;

public interface IBusService {
     List<BusList> getAllBusses();
    
     boolean register(CustomerDetails cusDetails);
     boolean login(login login);
     
     CustomerDetails getUserByEmailId(String EmailId);
     void updateUser(CustomerDetails cusDetails);
     void deleteUser(String EmailId);
     Set<SeatsList> GetSeat(long busNo);
	List<BookingTable> getBookingList(String emailId);
	boolean book(BookingTable bookingTable);
    void getseatings(String s, String b);
	void deleteBook(long TktNo);
	   
}

