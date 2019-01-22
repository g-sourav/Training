import { Injectable } from '@angular/core';
import { BookDetails } from '../../Pojo/BookDetails';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DeleteBookService {

  constructor(private http:Http) { }

  deleteBook(book: BookDetails) {
    this.http.delete("/LibraryManagementSystem/book/deleteBook/"+book.bookId).subscribe(responseData=>console.log(responseData));
  }

}
