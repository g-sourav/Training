import { Injectable } from '@angular/core';
import { BookDetails } from 'src/app/modules/Pojo/BookDetails';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BorrowerDetails } from 'src/app/modules/Pojo/BorrowerDetails';
import { BookBorrowed } from 'src/app/modules/Pojo/BookBorrowed';

@Injectable({
  providedIn: 'root'
})
export class ShowBooksService {

  constructor(private http:HttpClient) { }

  showBorrowedBooks(user: BorrowerDetails): Observable<BookDetails>{
    return this.http.get<BookDetails>("/LibraryManagementSystem/bookBorrow/getBorrowedBooks/"+user.borrowerEmail);
  }

  showBookName(bookBorrowed: BookBorrowed) {
    return this.http.get("/LibraryManagementSystem/book/getABook/"+bookBorrowed.bookId);
  }

}
