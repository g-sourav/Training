import { Injectable } from '@angular/core';
import { BookBorrowed } from 'src/app/modules/Pojo/BookBorrowed';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {

  constructor(private http:Http) { }

  borrowBook(borrowBook: BookBorrowed) {
    console.log(borrowBook);
    this.http.post("/LibraryManagementSystem/bookBorrow/borrowBook",borrowBook).subscribe(responseData=>{console.log(responseData.statusText)});
  }
}
