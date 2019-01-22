import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Quiz } from 'src/app/Models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class GetQuizService {

  constructor(private http:HttpClient) { }

  getQuizList(email): Observable<Quiz[]> {
    return this.http.get<Quiz[]>("/QuizApp-1.0.0/Quiz/getUserQuizDetails/"+email);
  }

}
