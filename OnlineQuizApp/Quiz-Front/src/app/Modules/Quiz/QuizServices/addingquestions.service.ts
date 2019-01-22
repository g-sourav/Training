import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { question } from 'src/app/Models/question';


@Injectable({
  providedIn: 'root'
})
export class AddingquestionsService {
  http:HttpClient;
  statusRes:String;
  status:Boolean;
  constructor(h:HttpClient) { 
    this.http=h;
  }



  public addAllQuestions(questions:question[],id:number){
    console.log(questions);
    console.log('Id'+id);
    
  
       return this.http.post('/QuizApp-1.0.0/Question/saveQuestions/'+id,questions,{ responseType: 'text' });
 }
  
  public fetchquestions(category:String){
    
  
    return this.http.get<question[]>("/QuizApp-1.0.0/Question/questionsByQuizCategory/"+category);
  }

  public fetchAllquestionsByQuiz(id:number){
    
  
    return this.http.get<question[]>("/QuizApp-1.0.0/Question/getQuestions/"+id);
  }

}
