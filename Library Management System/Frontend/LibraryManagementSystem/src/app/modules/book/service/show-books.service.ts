import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowBooksService {

  constructor(private http:HttpClient) { }

  public showBooks(): Observable<any>
    {
      console.log("in showBooksService");
      return this.http.get<any>("/LibraryManagementSystem/book/getAllBooks");
    }

}
