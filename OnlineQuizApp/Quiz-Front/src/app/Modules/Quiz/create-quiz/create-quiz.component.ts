import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CreateQuizService } from '../QuizServices/create-quiz.service';
import { Quiz } from 'src/app/Models/Quiz';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';
import { GlobalUserDetailsService } from '../../User/UserServices/global-user-details.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  service:CreateQuizService;
  CreateQuiz: Quiz;
  createQuizDetails;
  info;
  temp;
  perQuestionTime:string;
  perQuestionTimeType: any;
  time;
  show:boolean=true;

  constructor(private CreateQuizService:CreateQuizService,private router:Router,
    private quizService:GlobalQuizDetailsService,
    private userService:GlobalUserDetailsService) {

    this.service=CreateQuizService;
    this.CreateQuiz=new Quiz();
    this.CreateQuiz.quizType="Public";
    this.CreateQuiz.quizDifficulty_level="Easy";
    this.perQuestionTimeType="Fixed Time";
   }

  ngOnInit() {
  }

  saveQuiz(){
    this.CreateQuiz.creatorId=this.userService.currentUser.userId;
    this.service.createTheQuiz(this.CreateQuiz).subscribe(
      data=>{console.log('create quiz from db '+data);
      this.quizService.quiz=data;
      this.quizService.perQuestionTime=this.perQuestionTime;
      console.log(this.CreateQuiz.creatorId);
      
      if(this.CreateQuiz.creatorId===9999)
      this.router.navigate(['admin/test']);
      else
      this.router.navigate(['user/test']);
    }
    );
  }



  // onCreateQuiz(){
  //   console.log(this.CreateQuiz);
  //   console.log(this.perQuestionTime);

  //   this.service.createTheQuiz(this.CreateQuiz).subscribe
  //   (response=>{this.createQuizDetails=response; 
  //               console.log(this.createQuizDetails.quizId); 
  //               this.temp = {id : this.createQuizDetails.quizId, time : this.perQuestionTime}; 
  //               this.info = JSON.stringify(this.temp);
  //               console.log(this.info);
  //               this.createQuizHide();
  //               this.router.navigate(['add-question',this.info]);
  //             });
  // }
  // createQuizHide()
  //     {
  //       this.show = false;
  //       console.log("hdfui");
  //     }
}

