import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeactivateUserAccountService {

  constructor(private http: HttpClient) { }

  deactivateUserAccount(email: String) {
    this.http.get("/QuizApp-1.0.0/User/deactivateUserAccount/"+email).subscribe(data=>console.log("Deleting User Acc =>"+data));
  }

}
