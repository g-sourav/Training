import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from 'src/model/student';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {
  http:HttpClient;
  constructor(private httpclient:HttpClient) { 
    this.http=httpclient;
  }
  loginStudent(student:Student){
    console.log(student);
    return this.http.post('http://10.223.99.44:8080/onlineTestApp/controller/login',student);
  }
  registerStudent(student:Student){
    console.log(student);
    return this.http.post('http://10.223.99.44:8080/onlineTestApp/controller/register',student);
  }
}
