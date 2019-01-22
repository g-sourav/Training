import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators,FormControl } from '@angular/forms';

import { Router,ActivatedRoute } from '@angular/router';
import { question } from 'src/app/Models/question';
import { QuestionHint } from 'src/app/Models/questionHint';
import { QuestionOption } from 'src/app/Models/questionOption';
import { Quiz } from 'src/app/Models/Quiz';
import { AddingquestionsService } from '../QuizServices/addingquestions.service';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';
import { GlobalUserDetailsService } from '../../User/UserServices/global-user-details.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  quiz1=new Quiz();
  form: FormGroup;
  arr2: FormGroup;
  opt: number;
  hi: number;
  check: any;
  ques: number = 0;

  question = new question();
  questions: question[];
  questions1: question[];
  prequestions: question[];
  answer: number = 0;

  q: any;
  questionhint = new QuestionHint();
  questionoption = new QuestionOption();
  quiz = new Quiz();
  s: number = 0;
  t: number = 0;
  o: number = 0;
  flag:boolean=true;
  contentEditable: boolean = false;
  index = [];
  isavailable: boolean = true;
  checkedQuestions: question[] = [];
  isCheckedQuestion: boolean[] = [];
  @ViewChild('message') message: ElementRef;
  @ViewChild('message1') message1: ElementRef;

  ishide: boolean;
  id1: number;

  ngOnInit() {
    this.opt = 0;
    this.hi = 0;
    this.ishide = false;
    this.quiz1=this.quizService.quiz;
console.log(this.quiz1);


    this.form = this.fb.group({
      arr: this.fb.array([this.initdiv()])
    })
    this.addingquestion.fetchquestions(this.quiz1.quizCategory).subscribe(articleres => {
      this.questions1 = articleres;
      if (this.questions1.length === 0) {
        this.message.nativeElement.innerHTML = "No questions available  for selected Category";
      }

    });

  }

  constructor(private addingquestion: AddingquestionsService, private fb: FormBuilder,private router:Router,
    private route: ActivatedRoute,
    private quizService:GlobalQuizDetailsService,
    private user:GlobalUserDetailsService) {
    for (let i = 1; i <= 220; i++) {
      this.index.push(i);
    }

  }
  onCheck(value, event) {
    if (event.target.checked) {
      this.checkedQuestions.push(value);
      if (this.isCheckedQuestion[value]) {
        this.isCheckedQuestion[value] = false;


      }
    }
    else {

      var index = this.checkedQuestions.indexOf(value);
      this.checkedQuestions.splice(index, 1);


    }
    this.message1.nativeElement.innerHTML = "No of questions selected " + this.checkedQuestions.length;

  }

  onSubmit() {
    console.log(this.checkedQuestions);
    console.log('Quizid'+this.quiz1.quizId);
    
    this.addingquestion.addAllQuestions(this.checkedQuestions, this.quiz1.quizId).subscribe(data => {
      console.log('Submit ques'+data);
    });
    if(this.user.currentUser.userId===9999)
    this.router.navigate(['admin/fetchfinal']);
    else
    this.router.navigate(['user/fetchfinal']);
    
  }
  addnewquestion() {
    this.isavailable = false;

  }
  save(model: question) {
    // if (this.form.get('arr').value.length > 0) {
      console.log(this.form.get('arr').value.length);
      this.q = this.form.get('arr').value;
      console.log(this.q.length);
      this.ques = 0;
      this.flag=true;
      this.q.forEach(element => {

        this.ques++;
        this.answer=0;
        element.arr2.forEach(option => {
        console.log(option.ck);
        if (option.ck == true) {
            this.answer++;
          }
        });
       
        if (element.arr2.length < 2) {
          this.flag=false;
          alert("two options are mandatory for question:" + this.ques); 
         }
         if (element.arr2.length > 4) {
          this.flag=false;
          alert("four options are maximum for question:" + this.ques); 
         }
         console.log(this.answer);
        if (this.answer == 0) {
          this.flag=false;
          alert("please select correct answer for question:" + this.ques);
        }
        if (element.arr3.length >3) {
          this.flag=false;
         
          alert("maximum 3 hints are allowed for question:" + this.ques); 
         }
      });
if(this.flag===true)     
 {
    this.submitqes(this.questions);
  }
  else{
    alert("please check the form again");
  }
  }

submitqes(questions) {

    this.questions = new Array(this.q.length);
    this.q.forEach(element => { 
      this.questions[this.s] = new question();
      this.questions[this.s].questionTime = this.quizService.perQuestionTime;
      this.questions[this.s].questionInfo = element.id;
      this.questions[this.s].questionFacts = element.ft;
      this.questions[this.s].optionsList = new Array(element.arr2.length);
      console.log("array length");
      console.log(element.arr2.length);
      this.o = 0;
      
      element.arr2.forEach(option => {
        this.questions[this.s].optionsList[this.o] = new QuestionOption();
        this.questions[this.s].optionsList[this.o].optionInfo = option.op;
        this.questions[this.s].optionsList[this.o].answerStatus = option.ck;
        this.o++;
      });
      this.o = 0;
      this.questions[this.s].hintsList = new Array(element.arr3.length);
      element.arr3.forEach(hints => {
        this.questions[this.s].hintsList[this.o] = new QuestionHint();
        this.questions[this.s].hintsList[this.o].hintInfo = hints.ht;
        this.o++;
      });
      this.s++;
    });
    this.merge(this.questions);
  }

  merge(questions) {
    console.log("merge");
    this.questions = this.questions.concat(this.checkedQuestions);
    console.log('QuizId'+this.quiz1.quizId);
    
    this.addingquestion.addAllQuestions(this.questions, this.quiz1.quizId).subscribe(articleres => {
   console.log(articleres);
   if(this.user.currentUser.userId===9999)
    this.router.navigate(['admin/fetchfinal']);
    else
    this.router.navigate(['user/fetchfinal']);
    });
  }

  toggleEditable(event, j, a) {
    if (event.target.checked) {
      this.t++;
      const one = a.get('arr2') as FormArray;
      this.contentEditable = true;

    }
    else {
      this.t--;

    }
  }

  initdiv(): FormGroup {

    this.opt = 0;
    this.t = 0;
    this.hi = 0;

    return this.fb.group({

      id:new FormControl('',Validators.required),
      ft: '',
      cat: new FormControl(['']),
      arr2: this.fb.array([this.initOption()]),
      arr3: this.fb.array([this.initHint()])
    })
  }

  initOption(): FormGroup {
    return this.fb.group({
      op: '',
      ck: false,
    })
  }
  initHint(): FormGroup {
    return this.fb.group({
      ht: ''
    })
  }

  adddiv() {

    if (this.t == 0|| this.opt === 0 ) {
      if (this.opt === 0 && this.t === 0) {
        alert("two options are mandatory and select correct answer");

      }
      

      else if (this.t == 0) {
        alert(" select correct answer");
      }
      else {
        alert("two options are mandatory ");
      }

    }



    else {
      this.q++;
      const one = this.form.get('arr') as FormArray;
      one.push(this.initdiv());
    }

  }
  get Id(){
    return this.form.get('id');
  }

  remove(i) {
    this.q--;
    const one = this.form.get('arr') as FormArray;
    one.removeAt(i);
  }
  addOption(a) {
if(this.opt>2){
  alert(" only four options are allowed");

}
else{
   
      const one = a.get('arr2') as FormArray;

      one.push(this.initOption());
     
      this.opt++;
      console.log(this.opt);
}
    
  }
  removeOption(j, a) {
    this.opt--;
     console.log(this.opt);
    const one = a.get('arr2') as FormArray;
    one.removeAt(j);
  }
  addHint(a) {
    
    
      const one = a.get('arr3') as FormArray;
      one.push(this.initHint());
      this.hi = this.hi;
     

    
  }
  removeHint(k, a) {
   
    console.log(this.hi);
    const one = a.get('arr3') as FormArray;
    one.removeAt(k);
  }

}



