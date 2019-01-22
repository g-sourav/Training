import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionDetailsService {

  http:HttpClient;
  constructor(private httpClient:HttpClient) {
    this.http=httpClient;
   }
   getQuestionDetails(id:String){
     console.log("calling get");
     return this.http.get('http://10.223.99.44:8080/onlineTestApp/admin/show/'+id);
   }
   generateResult(testName,name,result){
     console.log("inside generate result");
     console.log(result);
    return this.http.post('http://10.223.99.44:8080/onlineTestApp/admin/calculateResult/'+testName+"/"+name,result).subscribe(response=>console.log("done"));
   }

   displayResult(exam,id)
   {
     return this.http.get('http://10.223.99.44:8080/onlineTestApp/controller/displayResults/'+exam+"/"+id);
   }
}
