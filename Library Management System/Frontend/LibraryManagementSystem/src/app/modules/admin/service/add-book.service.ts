import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BookDetails } from '../../Pojo/BookDetails';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private http: Http) { }

  addBook(book: BookDetails) {
    return this.http.post("/LibraryManagementSystem/book/addBook",book).subscribe(responseData=>console.log(responseData.statusText));
  }

}
