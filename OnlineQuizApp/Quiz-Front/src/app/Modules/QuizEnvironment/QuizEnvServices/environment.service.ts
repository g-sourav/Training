import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { question } from 'src/app/Models/question';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  questions:question[];
  constructor(private httpClient:HttpClient) {
   }
  
  getQuestions(quizid:number){
    console.log("calling quiz"+quizid);
     return this.httpClient.get<question[]>('/QuizApp-1.0.0/Question/getQuestions/'+quizid);
      }
  saveAnswers(listAnswers){
      return this.httpClient.post('/QuizApp-1.0.0/Quiz/saveAnswersList',listAnswers);
  }
}
