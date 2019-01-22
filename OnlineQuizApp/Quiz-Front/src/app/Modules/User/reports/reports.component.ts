import { Component, OnInit } from '@angular/core';

import { GlobalUserDetailsService } from '../UserServices/global-user-details.service';
import { GetQuizService } from '../UserServices/get-quiz.service';
import { Router } from '@angular/router';
import { GlobalQuizDetailsService } from '../UserServices/global-quiz-details.service';
import { Quiz } from 'src/app/Models/Quiz';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  title:String;
  Category:String;
  p:any;
  resultSet: Quiz[];
  user: User = new User();

  constructor(
    private getResultService: GetQuizService,
    private getUser: GlobalUserDetailsService,
    private router: Router,
    private setQuiz: GlobalQuizDetailsService
  ) {
  }

  ngOnInit() {
    this.user = this.getUser.getUser();
    this.getQuizDetails();
  }

  getQuizDetails() {
    this.getResultService.getQuizList(this.user.userEmail).subscribe(
      data => {
        console.log(data);
        this.resultSet = data;
      }
    );
  }

  showResult(quiz: Quiz) {
    this.setQuiz.setQuiz(quiz);
    this.router.navigate(['user/reports-page']);
  }

}
