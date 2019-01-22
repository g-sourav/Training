import { Component, OnInit, OnDestroy } from '@angular/core';
import { question } from 'src/app/Models/question';
import { answer } from 'src/app/Models/answer';
import { EnvironmentService } from '../QuizEnvServices/environment.service';
import { QuestionOption } from 'src/app/Models/questionOption';
import { Router } from '@angular/router';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';
import { GlobalUserDetailsService } from '../../User/UserServices/global-user-details.service';
import { Quiz } from 'src/app/Models/Quiz';
import { clearResolutionOfComponentResourcesQueue } from '@angular/core/src/metadata/resource_loading';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.css']
})
export class EnvironmentComponent implements OnInit, OnDestroy {
  quiz:Quiz;
  userId:number;
  listOfQuestions:any;
  arrayListOfQuestions:question[];
  currentQuestionNumber:number=0;
  currentQuestionPojo:question;
  totalNumberOfQuestions:number;
  currentOptionNumber:number=0;
  currentOptionPojo:QuestionOption;
  totalNumberOfOptions:number;
  checkedOptions:boolean[];
  listOfAnswers:answer[]=[];
  indexOfListOfAnswers:number=0;
  answerPojo:answer;
  currentHintNumber:number=-1;
  visible:boolean=false;
  totalNumberOfHints:number;
  hintText:string="Get a Hint";

  constructor(private environmentService:EnvironmentService, private router: Router,
    private quizService:GlobalQuizDetailsService,
    private userService:GlobalUserDetailsService) {
    this.currentQuestionPojo=new question();
    this.currentOptionPojo=new QuestionOption();
  }
  ngOnInit() {
    this.quiz=this.quizService.quiz;
    this.userId=this.userService.currentUser.userId;
      this.listOfQuestions=this.environmentService.questions;
      this.arrayListOfQuestions=this.listOfQuestions;
      this.totalNumberOfQuestions=this.arrayListOfQuestions.length;
      this.questionIterator();
  }
  questionIterator(){
      this.currentQuestionPojo=this.arrayListOfQuestions[this.currentQuestionNumber];
      this.currentHintNumber=-1;
      this.seconds=parseInt(this.currentQuestionPojo.questionTime);
      this.start();
      this.totalNumberOfOptions=this.currentQuestionPojo.optionsList.length;
      this.checkedOptions=new Array(this.currentQuestionPojo.optionsList.length);
      this.totalNumberOfHints=this.currentQuestionPojo.hintsList.length;
      for(let i=0;i<this.currentQuestionPojo.optionsList.length;i++)
        this.checkedOptions[i]=false;
  }
  onCheck(index:number){
      if(this.checkedOptions[index])
        this.checkedOptions[index]=false;
      else
        this.checkedOptions[index]=true;
  }

  onNext(){
    for(let i=0;i<this.totalNumberOfOptions;i++){
      this.answerPojo=new answer();
      this.answerPojo.isChecked=this.checkedOptions[i];
      this.answerPojo.questionId=this.currentQuestionPojo.questionId;
      this.answerPojo.quizId=this.quiz.quizId;
      this.answerPojo.userId=this.userId;
      this.answerPojo.optionId=this.currentQuestionPojo.optionsList[i].optionId;
      if(this.answerPojo.isChecked){
      this.listOfAnswers[this.indexOfListOfAnswers]=this.answerPojo;
        this.indexOfListOfAnswers=this.indexOfListOfAnswers+1;}
      this.visible=false;
      this.hintText="Get a Hint";
     
    }
    if(this.currentQuestionNumber<this.totalNumberOfQuestions-1){
      this.currentQuestionNumber=this.currentQuestionNumber+1;
      this.questionIterator();
    }
  }


  onSubmit(){
    this.onNext();
    this.stop();
    console.log(this.listOfAnswers);
    this.environmentService.saveAnswers(this.listOfAnswers).subscribe(
      data=>{alert('Your score '+data);
      this.router.navigate(['user']);
    }
    );
   
  }


  showHint(){
    if(!this.visible){
      this.visible=true;
    }
    if(this.currentHintNumber<this.totalNumberOfHints-1){
      if(this.currentHintNumber==-1){
        this.hintText="Get More";
      }
      if(this.currentHintNumber==this.totalNumberOfHints-3){
        this.hintText="Get Last Hint";
      }
      if(this.currentHintNumber==this.totalNumberOfHints-2){
        this.hintText="All hints taken";
      }
      this.currentHintNumber=this.currentHintNumber+1;
    }

  }








//Timer Code
intervalId = 0;
message: String;
seconds: number;

clearTimer() { clearInterval(this.intervalId); }

ngOnDestroy(){
  this.clearTimer();
}
start() { this.countDown(); }
stop()  {
  this.clearTimer();
  this.message = `${this.seconds}`;
}

private countDown() {
  this.clearTimer();
  this.intervalId = window.setInterval(() => {
    
    if (this.seconds <= 0) {
      this.onNext();
         if(this.currentQuestionNumber==this.totalNumberOfQuestions-1){
           alert('Test submitted');
        this.environmentService.saveAnswers(this.listOfAnswers).subscribe(
          data=>{alert('Your Score '+data);
          this.router.navigate(['user']);
        }
        );
        
      }
    } else {
      this.message = `${Math.floor(this.seconds)}`;
      //console.log(this.message);
      this.seconds -= 1;
    }
  }, 1000);
}
clearResponse(currentQuestionNumber){
 this.checkedOptions = new Array<boolean>(this.listOfQuestions[currentQuestionNumber].length);
}
}
