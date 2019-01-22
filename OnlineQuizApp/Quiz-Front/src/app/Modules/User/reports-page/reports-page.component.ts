import { Component, OnInit, HostBinding } from '@angular/core';
import { QuizResultService } from '../UserServices/quiz-result.service';
import { GlobalQuizDetailsService } from '../UserServices/global-quiz-details.service';
import { GlobalUserDetailsService } from '../UserServices/global-user-details.service';
import { Results } from 'src/app/Models/Results';
import { User } from 'src/app/Models/User';
import { Quiz } from 'src/app/Models/Quiz';


@Component({
  selector: 'app-reports-page',
  templateUrl: './reports-page.component.html',
  styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {
  
    datapercentage: number;
    res = new Results();

  constructor(
    private quizResult: QuizResultService,
    private getQuiz: GlobalQuizDetailsService, 
    private getUser: GlobalUserDetailsService
    ) { }

    user= new User();
    quiz= new Quiz();

  ngOnInit() {
    this.user=this.getUser.getUser();
    this.quiz=this.getQuiz.getQuiz();
    this.onLoad();
  }
  onLoad() {
    this.quizResult.getQuizResult(this.user.userEmail,this.quiz.quizId).subscribe(responseData=>{
      this.res=responseData;
      console.log("ResultForQuizObtained=>"+responseData);
    });

  }
}
