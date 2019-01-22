import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Login} from '../login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  http:HttpClient;
  statusRes:String;
  constructor(h:HttpClient) { 
    this.http=h;
  }
  
  public login(login:Login){
    console.log("log service");
    console.log(login.emailId,login.password);
    return this.http.put("http://localhost:4002/bus/login",login)
  }
  
}
