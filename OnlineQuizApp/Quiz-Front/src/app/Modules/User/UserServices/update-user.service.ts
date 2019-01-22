import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private http: HttpClient) { }
  
  updateUserDetails(user: User) {
    this.http.post("/QuizApp-1.0.0/User/updateUserDetails",user).subscribe(
      data=>{console.log('Updated user'+data)});
  }

}

