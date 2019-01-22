import { Injectable, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { booking } from 'src/shared/model/booking';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class BookingService implements OnInit{
  http:HttpClient;
  constructor(private login:LoginService,h:HttpClient) {
    this.http=h;
   }
  ngOnInit(){
    console.log(this.login.user);
  }
  public createBooking(booking:booking) : String{
    console.log("Booking service");
    console.log(booking.user);
    console.log(booking.carDetails);
    console.log(booking.location);
    console.log(booking.date);
    this.http.post("/test-drive/test-drive/booking",JSON.stringify(booking),httpOptions).subscribe();
    return 'done .....';
  }
    getBooking():Observable<booking[]>{
      return this.http.get<booking[]>("/test-drive/test-drive/booking",httpOptions);
     }
}
