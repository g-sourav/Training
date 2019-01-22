import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { card } from 'src/app/Models/card';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  http:HttpClient;
  statusRes:String;
  
  constructor(h:HttpClient) {
    this.http=h;
   }
  getcards() {
    return this.http.get<card[]>("/QuizApp-1.0.0/Admin/getAllQuizDetails");
  }
  getcategory(){
    return this.http.get<String[]>("/QuizApp-1.0.0/Admin/getAllQuizCategory");
  }
 
}
