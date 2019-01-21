import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/model/student';
import { GetDetailsService } from '../service/get-details.service';
import { QuestionDetailsService } from '../service/question-details.service';
import { templateJitUrl } from '@angular/compiler';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show:boolean;
  id:string;
  student;
  student1;
  service:GetDetailsService;
  questionService:QuestionDetailsService;
  list;
  list1;
  result;
  showResults:boolean=false;
  hideExam:boolean=true;
  showResultsButton:boolean=true;
  displayResults:boolean=false;
  exam:String;
  marks:number;
  listSize:boolean=true;
  resultSize:boolean=true;

  constructor(private router:Router,private route:ActivatedRoute,private ss:GetDetailsService,private qService:QuestionDetailsService) { 
    this.show=true;
    this.service=ss;
    this.questionService=qService;
    this.student=new Student();
    this.student1=new Student();
  }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.service.getDetails(this.id).subscribe(response=>this.student=response);
    this.service.getAvailableTests(this.id).subscribe(response=>{this.list=response;if(this.list.length==0)this.listSize=false;});
    this.service.getResults(this.id).subscribe(response=>{this.list1=response;if(this.list1.length==0)this.resultSize=false;});
  }
  
  onLogOut(){
    console.log("inside logout");
    this.show=false;
    this.router.navigate(['homepage']);
  }

updateStudent(){
  this.service.updateDetails(this.student)
  }

  getResults()
  {
    this.service.getResults(this.id).subscribe(response=>this.list1=response);
    this.showResults=true;
    this.hideExam=false;
  }

  getAvailableTests()
  {
    this.service.getAvailableTests(this.id).subscribe(response=>this.list=response);
    if(Object.keys(this.list).length == null)
      console.log("List is empty");
    this.hideExam=true;
    this.showResults=false;
  }

  startTest(data){
    this.router.navigate(['testpage',data,this.id]);
  }

  generateResults(exam)
  {
    this.questionService.displayResult(exam,this.id).subscribe(response=>this.result=response);
    this.showResultsButton=false;
    this.displayResults=true;
  }
}