import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {RouterModule, Router, ActivatedRoute} from '@angular/router';
import { BookingService } from '../api/booking.service';
import { Seats } from '../Seats';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
 check:boolean[]=[false,false,false, false, false,false,false,false,false,false,
                 false,false,false,false,false,false,false,false,false,false,
                 false,false,false,false,false,false,false,false,false,false,
                 false,false,false,false,false,false,false,false,false,false,
                 false,false,false,false,false,false,false,false,false,false];
 test:boolean[]=[false,false,false, false, false,false,false,false,false,false,
                false,false,false,false,false,false,false,false,false,false,
                false,false,false,false,false,false,false,false,false,false,
                false,false,false,false,false,false,false,false,false,false,
                 false,false,false,false,false,false,false,false,false,false];
 num:number
 seats:number[]=[]
 i:number
 s:number=0
 seat:string=""
  mailId: string;
  Date: string;
  fare: string;
  @ViewChild('message') message: ElementRef;

  seatno:number;
  BusNumber: string;
 Bservice:BookingService;
 SeatsArray:Seats[];
constructor(private route:ActivatedRoute, private service:BookingService, private router:Router) {
      this.Bservice=service;

  this.mailId= this.route.snapshot.paramMap.get('mailId');
  this.Date= this.route.snapshot.paramMap.get('Date');
  this.fare= this.route.snapshot.paramMap.get('fare');
  this.BusNumber= this.route.snapshot.paramMap.get('BusNumber');

    this.Bservice.getSeats(this.BusNumber).subscribe(seats=>{
      console.log(seats);
         this.SeatsArray=seats;
         
      this.SeatsArray.forEach(seat => {
           
        if(seat.availability===true)
        {
          this.seatno=seat.seatNumber;
          this.seatno=this.seatno-1;
          this.test[this.seatno]=true;


        }


      });
         });
 }

  ngOnInit() {
  }
    
  
  Booking(){

for(this.i=0;this.i<=49;this.i++)
{   
  if((this.check[this.i]===true)){
    this.seats[this.s]=this.i+1;
    this.seat+= this.seats[this.s];
    this.seat+=',';
    this.s++;
    
   }
}   
   if(this.seats.length===0)
   {   
    this.message.nativeElement.innerHTML="Please select atleast one seat";

   }
   else{
    this.router.navigate(['BookingPage',this.mailId,this.Date,this.fare,this.BusNumber,this.seats.length,this.seat]);

   }
  }

 
}

