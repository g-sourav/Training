import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.model';
import { CriticServiceService } from './critic-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  public titleS:any;
  public imageS:any;
 movie:User;

  constructor(private http:HttpClient,private criticSer:CriticServiceService) { }
  getEmployees():Observable<User>{
    return this.http.get<User>("/MyMovies-1.0/MyMovies/"+this.titleS);
                    
  }
  setData(title:any, imageSrc:any){
     this.titleS=title;
     this.imageS =imageSrc;
     console.log("In Service");
     console.log(this.titleS);
     console.log(this.imageS);
     this.criticSer.setDataCri(this.titleS);
  }
}
