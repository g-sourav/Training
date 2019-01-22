import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserAdminService {

  constructor(private http:Http) { }

  deleteUser(user:BorrowerDetails) {
    this.http.delete("/LibraryManagementSystem/borrower/deleteBorrower/"+user.borrowerEmail).subscribe(responseData=>console.log(responseData.statusText));
  }
}
