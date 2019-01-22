import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowerDetails } from 'src/app/modules/Pojo/BorrowerDetails';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor(private http: Http) { }

  registerBorrower(borrower: BorrowerDetails) {
    console.log(borrower);
    this.http.post("/LibraryManagementSystem/borrower/registerBorrower",borrower).subscribe(responseData=>{console.log(responseData.statusText)});
  }

}
