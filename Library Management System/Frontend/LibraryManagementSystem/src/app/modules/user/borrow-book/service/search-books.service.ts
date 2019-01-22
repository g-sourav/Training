import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookDetails } from 'src/app/modules/Pojo/BookDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBooksService {

  constructor(private http:HttpClient) { }

  searchBooks(searchString: string): Observable<BookDetails> {
    console.log(searchString);
    return this.http.get<BookDetails>("/LibraryManagementSystem/book/getBooks/"+searchString);
  }
}
