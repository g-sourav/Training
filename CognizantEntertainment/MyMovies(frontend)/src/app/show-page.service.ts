import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ShowTicket } from './showTicket';
import { Observable } from 'rxjs';
import { BookTicket } from './bookTicket';

@Injectable({
  providedIn: 'root'
})
export class ShowPageService {
  show:ShowTicket = new ShowTicket();
  book:BookTicket = new BookTicket();
  constructor(private http:HttpClient) { 
  }

  getDetails(dt,id):Observable<any>{ 
    return this.http.get<any>('/MyMovies-1.0/book-app/getDetails/'+JSON.stringify(id));
  }
}
