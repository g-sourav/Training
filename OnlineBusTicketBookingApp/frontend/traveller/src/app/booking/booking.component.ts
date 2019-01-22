import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booked } from '../booked';
import { BookingService } from '../api/booking.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  seats:String;
  @ViewChild('message') message: ElementRef;

  fare: string;
  seatNos:number;
   price:number;
   router:Router;
   booking=new Booked();
   BService:BookingService
  constructor(private route:ActivatedRoute, private r:Router, private service:BookingService) {
     this.router=r;
     
     this.BService=service;
    this.seats= this.route.snapshot.paramMap.get('seats');
    this.booking.seatNumber= this.route.snapshot.paramMap.get('seatNumbers');
  this.booking.mailId= this.route.snapshot.paramMap.get('mailId');
  this.booking.dateOfJourney= this.route.snapshot.paramMap.get('Date');
  this.fare= this.route.snapshot.paramMap.get('fare');
  this.booking.busNumber= this.route.snapshot.paramMap.get('BusNumber');
   this.seatNos = +this.seats;
   this.booking.ticketNumber= Math.floor((Math.random()*60)+1)+this.seatNos;

   this.price= +this.fare;
  this.booking.totalPrice=""+this.seatNos*this.price;
}
  ngOnInit() {

  }
  Book()
  {  
    console.log(this.booking.mailId);
    if(this.booking.mailId==="MailId"){
      this.message.nativeElement.innerHTML="Enter your mailId";

    }
    else{
    this.BService.addBooking(this.booking).subscribe(data=>{
       console.log("booking added");
       console.log(this.booking.ticketNumber);

       this.router.navigate(['/ConfirmPage']);
       localStorage.setItem("mailId", ""+this.booking.mailId,);
    }, error => {

          this.router.navigate(['/ConfirmPage']);

    });
    
  }

  }

}
