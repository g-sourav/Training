import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookPageService {

  constructor(private http:HttpClient) { }

getSeats(show:number){
  return this.http.get('/MyMovies-1.0/book-app/getSeats/'+show);
}
}
