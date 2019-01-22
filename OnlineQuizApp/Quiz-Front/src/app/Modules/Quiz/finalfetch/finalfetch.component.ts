import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { question } from 'src/app/Models/question';
import { QuestionOption } from 'src/app/Models/questionOption';
import { AddingquestionsService } from '../QuizServices/addingquestions.service';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';
import { Quiz } from 'src/app/Models/Quiz';
import { Router } from '@angular/router';




@Component({
  selector: 'app-finalfetch',
  templateUrl: './finalfetch.component.html',
  styleUrls: ['./finalfetch.component.css']
})
export class FinalfetchComponent implements OnInit {
  title = 'afterquizcreation';
  quiz = new Quiz();
  allquestions=new Array<question>();
  questionoption = new QuestionOption();
  pageIndex:number=1;
  time:string;
  p:any;
  @ViewChild('message') message: ElementRef;
  method(data){
    data=data+1;
  }
  constructor(private addingquestion: AddingquestionsService,
    private quizService:GlobalQuizDetailsService,
    private router:Router) { }
  ngOnInit() {
    this.quiz=this.quizService.quiz;
    this.time=this.quizService.perQuestionTime;
    this.addingquestion.fetchAllquestionsByQuiz(this.quizService.quiz.quizId).subscribe(data => {
      this.allquestions = data;
      console.log(this.allquestions.length);
      this.message.nativeElement.innerHTML = "Total number of questions :"+" "+this.allquestions.length;
     

    });
    
  }
  gotoDash(){
    this.router.navigate(['user']);
  }

}
