import { Component, OnInit } from '@angular/core';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { StoreUserDataService } from '../service/store-user-data.service';
import { EditUserService } from './service/edit-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  borrower: BorrowerDetails;

  constructor(private userData: StoreUserDataService, private editUserServ: EditUserService,private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.borrower=this.userData.getUser();
  }

  editUser() {
    alert('Details Updated Successfully!');
    this.editUserServ.registerBorrower(this.borrower);
    this.router.navigate(['/app-home']);
  }

}
