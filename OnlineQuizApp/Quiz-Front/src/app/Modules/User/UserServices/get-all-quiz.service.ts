import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from 'src/app/Models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class GetAllQuizService {

  constructor(private http: HttpClient) { }

  getAllQuizDetails() {
    return this.http.get<Quiz[]>("/QuizApp-1.0.0/Quiz/getAllQuiz");  
  }
  getcategory(){
    return this.http.get<String[]>("/QuizApp-1.0.0/Admin/getAllQuizCategory");
  }

}
