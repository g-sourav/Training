import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnvironmentService } from '../QuizEnvServices/environment.service';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';
import { Quiz } from 'src/app/Models/Quiz';
import { question } from 'src/app/Models/question';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {
  check:boolean;
  quiz:Quiz;
  ques:question;
  numberOfQues:number;
  constructor(private router:Router,
    private environmentService:EnvironmentService,
    private quizService:GlobalQuizDetailsService) { }
  
  onConfirm(){
    this.router.navigate(['environment']);
  }
  goBack(){
    this.router.navigate(['Dashboard']);
  }   
  ngOnInit() {
    this.quiz=this.quizService.quiz;
    this.check=false;
    this.environmentService.getQuestions(this.quiz.quizId).subscribe(
      data=>{
          this.numberOfQues=data.length;
          this.ques=data[0];
          this.environmentService.questions=data;
          console.log('Instruction comp'+data);
          
      }
    );
  }

}
