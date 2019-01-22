import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LocationService } from '../service/location.service';
import { booking } from 'src/shared/model/booking';
import { BookingService } from '../service/booking.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
 booking:booking;
 statusCreation:String;
  constructor(private location:LocationService,private service:BookingService,
    private login:LoginService) 
    {    this.booking=new booking();
      this.statusCreation='.';
    }

  ngOnInit() {
    this.booking.user=this.login.user;
    this.booking.carDetails=this.location.car;
    this.booking.location=this.location.loc;
    this.booking.date=this.location.date;
    console.log(this.booking);

  }
  public createBooking(){
    console.log("booking component")
      console.log(this.booking.user);
      console.log(this.booking.carDetails);
      console.log(this.booking.location);
      console.log(this.booking.date);
      if(confirm('Confirm to book')){
      this.statusCreation=this.service.createBooking(this.booking);}
    }
    list;
   public getBooking() {
      this.service.getBooking().subscribe(
        data=>{
          this.list=data;
        }
      )
    }
    }
