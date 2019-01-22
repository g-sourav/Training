import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {
  http:HttpClient;
  createQuizDetails;


  constructor(private httpclient:HttpClient) {
    this.http=httpclient;
   }

   createTheQuiz(CreateQuiz){
    console.log("inside service");
    console.log(CreateQuiz);
    return this.http.post('/QuizApp-1.0.0/Quiz/save',CreateQuiz);
}
}
