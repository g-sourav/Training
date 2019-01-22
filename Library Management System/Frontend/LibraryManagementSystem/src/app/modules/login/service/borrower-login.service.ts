import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BorrowerLoginService {

  constructor(private http: HttpClient) { }

  borrowerLogin(email) :Observable<any>{
    return this.http.get("/LibraryManagementSystem/borrower/getPassword/"+email);
  }
}
