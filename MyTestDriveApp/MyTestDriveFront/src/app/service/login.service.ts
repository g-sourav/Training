import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { user } from 'src/shared/model/user';
import { register } from 'src/shared/model/register';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  statusRes:String;
  user:register;
  constructor(private http:HttpClient) { 

  }
  public ValidateUser(user:user){
    console.log("login service");
    console.log(user.userName);
    console.log(user.password);
     return this.http.post("/test-drive/test-drive/login",user,httpOptions);
  }


  }

  

