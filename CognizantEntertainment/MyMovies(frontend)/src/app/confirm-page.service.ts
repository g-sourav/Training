import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookTicket } from './bookTicket';

@Injectable({
  providedIn: 'root'
})
export class ConfirmPageService {

  constructor(private http:HttpClient) { }

confirmBook(book:BookTicket){
  this.http.post('/MyMovies-1.0/book-app/book',book).subscribe(
    response=>{console.log(response);
  }
  );
}
}
