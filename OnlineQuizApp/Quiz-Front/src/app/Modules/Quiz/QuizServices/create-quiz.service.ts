import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Quiz } from 'src/app/Models/Quiz';


@Injectable({
  providedIn: 'root'
})
export class CreateQuizService {
  http:HttpClient;
  createQuizDetails;


  constructor(private httpclient:HttpClient) {
    this.http=httpclient;
   }

   createTheQuiz(CreateQuiz:Quiz){
    console.log("inside service");
    console.log(CreateQuiz);
    return this.http.post<Quiz>('/QuizApp-1.0.0/Quiz/save',CreateQuiz);
}
}
