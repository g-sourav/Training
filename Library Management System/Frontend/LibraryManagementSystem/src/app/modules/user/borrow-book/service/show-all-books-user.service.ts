import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from 'src/app/modules/Pojo/BookDetails';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShowAllBooksUserService {

  constructor(private http:HttpClient) { }

  showAllBooks(): Observable<BookDetails> {
    return this.http.get<BookDetails>("/LibraryManagementSystem/book/getAllBooks");
  }

}
