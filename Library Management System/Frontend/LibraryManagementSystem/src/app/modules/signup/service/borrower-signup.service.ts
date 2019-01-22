import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BorrowerSignupService {

  constructor(private http: Http) { }

  registerBorrower(borrower: BorrowerDetails) {
    console.log(borrower);
    this.http.post("/LibraryManagementSystem/borrower/registerBorrower",borrower).subscribe(responseData=>{console.log(responseData)});
  }

}
