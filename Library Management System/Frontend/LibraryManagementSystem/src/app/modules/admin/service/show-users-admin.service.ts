import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';

@Injectable({
  providedIn: 'root'
})
export class ShowUsersAdminService {

  constructor(private http:HttpClient) { }

  showAllUsers(): Observable<BorrowerDetails> {
    return this.http.get<BorrowerDetails>("/LibraryManagementSystem/borrower/getAllBorrowers");
  }

}
