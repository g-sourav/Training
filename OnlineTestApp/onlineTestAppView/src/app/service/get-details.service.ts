import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/model/student';


@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  http:HttpClient
  constructor(private httpclient:HttpClient) { 
    this.http=httpclient;
  }
  getDetails(id:string){
    return this.http.get('http://10.223.99.44:8080/onlineTestApp/controller/getDetails/'+id);
  }


updateDetails(student:Student){
   this.http.put('http://10.223.99.44:8080/onlineTestApp/controller/update/',student).subscribe(response=>{console.log("update");console.log(response);})
  }

  getAvailableTests(email:string)
  {
    return this.http.get('http://10.223.99.44:8080/onlineTestApp/controller/exams/'+email);
  }

  getResults(email:string)
  {
    return this.http.get('http://10.223.99.44:8080/onlineTestApp/controller/results/'+email);
  }
}