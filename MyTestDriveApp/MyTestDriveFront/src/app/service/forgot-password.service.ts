import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { register } from 'src/shared/model/register';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  http:HttpClient;
  statusRes:String;
  constructor(h:HttpClient) { 
    this.http=h;
  }
  UpdatePassword(register:register){
    console.log("forgot password service");
    console.log(register.emailId);
    console.log(register.password);
    return this.http.put("/test-drive/test-drive/UpdatePassword",register);

  }
     getUser(emailId){
      return this.http.get("/test-drive/test-drive/getUser/"+emailId);
    }
}
