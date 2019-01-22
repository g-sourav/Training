import { Injectable } from '@angular/core';
import { Quiz } from 'src/app/Models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class GlobalQuizDetailsService {
  perQuestionTime:string;
  quiz = new Quiz();

  constructor() { }

  getQuiz() {
    return this.quiz;
  }

  setQuiz(quiz: Quiz) {
      this.quiz=quiz;
  }

}
