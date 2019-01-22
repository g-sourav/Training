import { Component, OnInit } from '@angular/core';
import { BorrowerSignupService } from './service/borrower-signup.service';
import { BorrowerDetails } from '../Pojo/BorrowerDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  borrow:BorrowerDetails = new BorrowerDetails();
  constructor(private borrowerSignup: BorrowerSignupService, private router: Router) { }

  ngOnInit() {
  }

  addUser(formData) {
    console.log("Registering borrower..");  
    console.log(formData);
    alert("Registration Successful!");
    this.borrowerSignup.registerBorrower(formData);
    this.router.navigate(['/app-login']);
  }

}
