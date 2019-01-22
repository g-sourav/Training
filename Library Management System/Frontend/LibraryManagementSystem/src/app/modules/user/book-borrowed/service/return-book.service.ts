import { Injectable } from '@angular/core';
import { BookBorrowed } from 'src/app/modules/Pojo/BookBorrowed';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ReturnBookService {

  constructor(private http:Http) { }

  returnBook(borrowedBook: BookBorrowed) {
    console.log(borrowedBook);
    this.http.post("/LibraryManagementSystem/bookBorrow/returnBook",borrowedBook).subscribe(responseData=>console.log(responseData.status));
  }

}
