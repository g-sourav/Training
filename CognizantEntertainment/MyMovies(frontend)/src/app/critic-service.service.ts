import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Critic } from './critic';

@Injectable({
  providedIn: 'root'
})
export class CriticServiceService {
  public critic_titleS;
  constructor(private http:HttpClient) { }
  getEmployees():Observable<Critic>{
    return this.http.get<Critic>("/MyMovies-1.0/MyMovies/critic/"+this.critic_titleS);
                    
  }
  setDataCri(title:any){
     this.critic_titleS=title;
    
     console.log("In Service");
     
  }
}
