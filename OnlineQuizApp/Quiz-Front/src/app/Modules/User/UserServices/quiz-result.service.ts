import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Results } from 'src/app/Models/Results';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

  constructor(private http: HttpClient) { }

  getQuizResult(email: String, quizId: number) {
    console.log(email);
    console.log(quizId);
    return this.http.get<Results>("/QuizApp-1.0.0/Result/getQuizResult/"+email+"/"+quizId);
  }

}
