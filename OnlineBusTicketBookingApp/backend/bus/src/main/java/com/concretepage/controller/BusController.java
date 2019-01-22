package com.concretepage.controller;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;
import com.concretepage.repository.BusListRepository;
import com.concretepage.entity.BookingTable;
import com.concretepage.entity.BusList;
import com.concretepage.entity.CustomerDetails;
import com.concretepage.entity.SeatsList;
import com.concretepage.service.IBusService;
import com.concretepage.entity.login;

@CrossOrigin(origins="http://localhost:4200")
@Controller
@RequestMapping("bus")
public class BusController {
	@Autowired
	private IBusService busService;
	
	@PostMapping("registration")
	public ResponseEntity<Void> register(@RequestBody CustomerDetails cusDetails, UriComponentsBuilder builder) {
        boolean flag = busService.register(cusDetails);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/cusDetails/{EmailId}").buildAndExpand(cusDetails.getMailId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
	
	@PutMapping("login")
	public ResponseEntity<Void> login(@RequestBody login login) {
        boolean flag = busService.login(login);
        if (flag == false) {
        	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        else
        return new ResponseEntity<Void>(HttpStatus.OK);
	}
	@GetMapping("cusDetails/{EmailId}")
	public ResponseEntity<CustomerDetails> getUserByEmail(@PathVariable("EmailId") String EmailId) {
		CustomerDetails cusDetails = busService.getUserByEmailId(EmailId);
		return new ResponseEntity<CustomerDetails>(cusDetails, HttpStatus.OK);
	}
	@PutMapping("updateUser")
	public ResponseEntity<CustomerDetails> updateUser(@RequestBody CustomerDetails cusDetails) {
		busService.updateUser(cusDetails);
		return new ResponseEntity<CustomerDetails >(cusDetails, HttpStatus.OK);
	}
	@DeleteMapping("deleteUser/{EmailId}")
	public ResponseEntity<Void> deleteUser(@PathVariable("EmailId") String EmailId) {
		busService.deleteUser(EmailId);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping("getAllBusses")
	public ResponseEntity<List<BusList>> getAllBusses() {
		List<BusList> list = busService.getAllBusses();
		return new ResponseEntity<List<BusList>>(list, HttpStatus.OK);
	}
	
	@GetMapping("getSeats/{busNo}")
	public ResponseEntity<Set<SeatsList>> getSeatfrombus(@PathVariable("busNo") long busNo) {
		Set<SeatsList> seatsList = busService.GetSeat(busNo);
		return new ResponseEntity<Set<SeatsList>>(seatsList, HttpStatus.OK);
	}
   @GetMapping("bookingDetails/{EmailId}")
   public ResponseEntity<List<BookingTable>> booking(@PathVariable("EmailId") String EmailId)
   {
	   List<BookingTable> bookinglist=busService.getBookingList(EmailId);
	   return new  ResponseEntity<List<BookingTable>>(bookinglist, HttpStatus.OK);
	   
   }
   
   @PostMapping("addBooking")
   public ResponseEntity<Void> addbooking(@RequestBody BookingTable bookingTable) {
	   boolean flag = busService.book(bookingTable);
       if (flag == false) {
       	return new ResponseEntity<Void>(HttpStatus.CONFLICT);
       }
       else
       {
          	return new ResponseEntity<Void>(HttpStatus.OK);

       }
      
	}
   
   @DeleteMapping("deleteBooking/{TktNo}")
   public ResponseEntity<Void> deleteBooking(@PathVariable("TktNo") long TktNo) {
       busService.deleteBook(TktNo);
       return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
 
   
	
}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	