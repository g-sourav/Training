import { Component, OnInit } from '@angular/core';
import { Booked } from '../booked';
import { BookingService } from '../api/booking.service';

@Component({
  selector: 'app-viewbooking',
  templateUrl: './viewbooking.component.html',
  styleUrls: ['./viewbooking.component.css']
})
export class ViewbookingComponent implements OnInit {
  mailId:String
  booking=new Booked();
  bookings: Booked[];
   Bservice: BookingService;
   isavailable:boolean=false;
  constructor(private service:BookingService) {
    this.Bservice =service;
   
    this.viewBooking();
  }

  ngOnInit() {  
  }

  viewBooking(){
    this.mailId= localStorage.getItem("mailId");
    this.Bservice.viewBooking(this.mailId).subscribe(bookinglist=>{
      console.log("Customer  creation success");
     console.log("data");
      this.bookings=bookinglist;
     

  }, error => {
           this.isavailable=true;
    
  }
  );
}
  deleteBooking(TktNo:String){
   
      this.Bservice.deleteBooking(TktNo).subscribe(data=>{
        this.viewBooking(); 

      });
  }

}
