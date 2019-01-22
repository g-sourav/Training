import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { register } from 'src/shared/model/register';
import { user } from 'src/shared/model/user';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  http:HttpClient;
  statusRes:String;
  constructor(h:HttpClient) { 
    this.http=h;
  }

public createUser(register:register):string {
  console.log("Hii")
  console.log("Register service");
  console.log(register.userName);
  console.log(register.mobileNumber);
  console.log(register.emailId);
  console.log(register.password);
  this.http.post("/test-drive/test-drive/user",JSON.stringify(register),httpOptions).subscribe();
  return 'user Successfully created .....';
}


  getUser():Observable<user[]>{
    return this.http.get<user[]>("/test-drive/test-drive/user",httpOptions);
   }

   
}
