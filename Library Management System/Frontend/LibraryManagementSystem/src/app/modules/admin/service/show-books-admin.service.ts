import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from '../../Pojo/BookDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowBooksAdminService {

  constructor(private http:HttpClient) { }

  showAllBooks(): Observable<BookDetails>{
    return this.http.get<BookDetails>("/LibraryManagementSystem/book/getAllBooks");
  }

}
