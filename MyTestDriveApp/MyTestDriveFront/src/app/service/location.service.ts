import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { location } from 'src/shared/model/location';
import { carDetails } from 'src/shared/model/carDetails';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  loc:location;
  car:carDetails;
  date:string;
  constructor(private http:HttpClient) { }
  getLocation():Observable<location[]>{
    return this.http.get<location[]>("/test-drive/test-drive/location",httpOptions);
   }
   getcarDetails(carName){
     return this.http.get("/test-drive/test-drive/getCar/"+carName);
   }




   
}
