import { Injectable } from '@angular/core';
import { UserDetails } from './user-details';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
user=new UserDetails();
dash=true;
constructor(private http:HttpClient) { }

  login(user:UserDetails){
    this.user=user;
    this.http.post("/MyMovies-1.0/MyMovies/register",user).subscribe();
    
  }
  saveUserLogin(user){
    this.user=user;
    return this.http.post("/MyMovies-1.0/MyMovies/auth",user);

  }
}
