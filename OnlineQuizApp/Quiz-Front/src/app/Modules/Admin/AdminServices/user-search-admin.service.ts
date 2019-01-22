import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserSearchAdminService {
  constructor(private http:HttpClient) { }


  public getSearchUser(str:string):Observable<any[]>{
    console.log('Service:'+str);
    return this.http.get<any[]>("/QuizApp-1.0.0/Admin/searchUserNames/"+str);
    } 
    

    public getUserList(userName:string)
     {
      console.log("App service" + userName);
  return this.http.get<User[]>("/QuizApp-1.0.0/Admin/getAllUserDetails/"+userName);
  }
  public deactivateUser(email:string){
    console.log(email);
    return this.http.get<User[]>("/QuizApp-1.0.0/Admin/deactivateUserAccount/"+email);

  }
}