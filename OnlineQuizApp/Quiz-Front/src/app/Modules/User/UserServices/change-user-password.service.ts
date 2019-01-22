import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class ChangeUserPasswordService {

  constructor(private http: HttpClient) { }

  changeUserPassword(user : User) {
    this.http.post("/QuizApp-1.0.0/User/updateUserPassword",user).subscribe(data=>console.log("UserPasswordChange=>"+data));
  }

}
