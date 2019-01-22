import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  http: HttpClient;

  constructor(h: HttpClient) {
    this.http = h;
   }
   public createCustomer(user) {
     this.http.post( '/QuizApp-1.0.0/User/login', user).subscribe(
       response => {console.log(response)}
);
  }
}
