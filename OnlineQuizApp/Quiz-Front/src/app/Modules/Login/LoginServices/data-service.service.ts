import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserLog } from 'src/app/Models/UserLog';
import { User } from 'src/app/Models/User';


@Injectable({
  providedIn: 'root'
})
export class DataService {
user = new UserLog();

constructor(private http: HttpClient) { }

  // login(user:UserDetails){
  //   this.user=user;
  //   this.http.post("/MyMovies-1.0/MyMovies/register",user).subscribe();
  // }
  saveUserLogin(user) {
    this.user = user;
    console.log(user);
    return this.http.post<User>('/QuizApp-1.0.0/User/auth', user);

  }
}
