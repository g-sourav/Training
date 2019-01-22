import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import {FormGroup, FormControl, Validators, EmailValidator } from '@angular/forms';
import { UserserviceService } from '../LoginServices/userservice.service';
import { User } from 'src/app/Models/User';
import { SecurityQuestion } from 'src/app/Models/SecurityQuestion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  u: UserserviceService;
  user = new User();


  arr=new Array<SecurityQuestion>();
  form = new FormGroup({
    userEmail : new FormControl(this.user.userEmail , [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    userPassword: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    userSecurityAnswer: new FormControl('', Validators.required),
    userGender: new FormControl('', Validators.required),
    userQuesId: new FormControl('', Validators.required)
  });

  constructor(private userservice: UserserviceService, private http: HttpClient,
    private router:Router) {
    this.u = userservice;
   
   }

  ngOnInit() {
    this.http.get<SecurityQuestion[]>('/QuizApp-1.0.0/User/securityquestion').subscribe(
      data => {
        console.log(data);
        this.arr = data;
        console.log(this.arr);

      }
    );
  }
  create(f) {
    console.log(f);
    console.log(this.user);
    this.u.createCustomer(this.user);
    this.router.navigate(['login']);
  }
  get userEmail() {
    return this.form.get('userEmail');
}
get userName() {
  return this.form.get('userName');
}
get userPassword() {
  return this.form.get('userPassword');
}
get Gender() {
  return this.form.get('userGender');
}
get SecurityQuestion() {
  return this.form.get('userQuesIdn');
}
get userSecurityAnswer() {
  return this.form.get('userSecurityAnswer');
}

}
