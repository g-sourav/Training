import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booked } from '../booked';
import { Seats } from '../Seats';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  http:HttpClient;
  statusRes:String;
  busno:number;

  baseUrl:String='http://localhost:4002/bus/';

  constructor(h:HttpClient) { 
    this.http=h;
  }

public viewBooking(mailId:String)
  {

    return this.http.get<Booked[]>(this.baseUrl +'bookingDetails/'+mailId);


  }
public deleteBooking(TktNo:String)
  {

    return this.http.delete(this.baseUrl +'deleteBooking/'+TktNo);


  }
 public addBooking(booking:Booked)
  {
         
    return this.http.post(this.baseUrl+"addBooking",booking);


  }
  public getSeats(busNumber:String)
  {
     this.busno=+busNumber;
     console.log(this.busno);
    return this.http.get<Seats[]>(this.baseUrl +'getSeats/'+this.busno);

  }
  
  

}
