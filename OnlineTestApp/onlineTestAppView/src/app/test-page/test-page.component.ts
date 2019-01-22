import { Component, OnInit ,OnDestroy} from '@angular/core';
import { QuestionDetailsService } from '../service/question-details.service';
import { QuestionOptions } from 'src/model/question-options';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit,OnDestroy {
  list;
  questionoption;
  questionService:QuestionDetailsService;
  id:string;
  name:string;
  i:number;
  j:number;
  show:boolean=true;
  answers:string[];
  answered:boolean[];
  selectedOption:string;
  highest:string;
  constructor(private quesService:QuestionDetailsService,private route:ActivatedRoute, private router: Router) {
    this.id=this.route.snapshot.paramMap.get('testname');
    this.name=this.route.snapshot.paramMap.get('username');
    console.log("username");
    console.log(this.name);
    this.questionService=quesService;
    this.questionoption=new QuestionOptions();
  }

  ngOnInit() {
    this.start();
    this.questionService.getQuestionDetails(this.id).subscribe(response=>{
      this.list=response;
      this.seconds= 60*(this.list.length);
      this.i=0;
      this.questionoption=this.list[this.i];
      this.answers=new Array(this.list.length);
      this.answered=new Array(this.list.length);
      this.highest=this.list.length;
    });
  }
  onClick(data){
    console.log(data);
    this.selectedOption=this.answers[Number(data)-1];
    this.j=0;
    for(let q of this.list){
      if(q.questionNo==data){
      this.questionoption=q;
      this.i=this.j;
      break;
    }
    this.j=this.j+1;
    }
    
  }
  onAnswer(data){
    console.log(data);
    //if answered then store true
    if(this.selectedOption)
    this.answered[Number(data)-1]=true;
    else
    this.answered[Number(data)-1]=false;
    console.log(this.answered);
    console.log("inside answer");
    
    
    this.answers[this.i]=this.selectedOption;
    if(this.i<this.list.length)
    this.selectedOption=this.answers[this.i+1];
    else
    this.selectedOption=null;
    console.log(this.answers);
    if(this.list[this.i+1]){
      this.i=(this.i)+1;
      this.questionoption=this.list[this.i];
    }
    //On submitting last question
    else{
      this.show=false;
      this.questionService.generateResult(this.id,this.name,this.answers);
      this.router.navigate(['dashboard',this.name]);
      alert("Test completed");
    }
  }

  //timer code
intervalId = 0;
message = '';
seconds: number;

clearTimer() { clearInterval(this.intervalId); }

ngOnDestroy(){
  this.clearTimer();
}
start() { this.countDown(); }
stop()  {
  this.clearTimer();
  this.message = `Holding at T-${this.seconds} seconds`;
}

private countDown() {
  this.clearTimer();
  this.intervalId = window.setInterval(() => {
    this.seconds -= 1;
    if (this.seconds <= 0) {
      this.show=false;
      this.stop();
      this.questionService.generateResult(this.id,this.name,this.answers);
      this.router.navigate(['dashboard',this.name]);
    } else {
       //if (this.seconds < 0) { this.message = 'Cant go forth'  } // reset
      this.message = `Time remaining: ${Math.floor(this.seconds/3600)} : ${Math.floor((this.seconds%3600)/60)} : ${Math.floor((this.seconds%3600)%60)}`;
    }
  }, 1000);
}
}