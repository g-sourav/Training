import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgotPasswordService } from '../service/forgot-password.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { register } from 'src/shared/model/register';




@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent  {
register:register=new register();
loginForm: FormGroup;
private forgotpasswordService:ForgotPasswordService
statusCreation:String;
form = new FormGroup({
  emailId:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required,Validators.minLength(5)])
});
  constructor(private router:Router, forgotpasswordService:ForgotPasswordService,private formBuilder:FormBuilder) {
    this.statusCreation='.';
    this.forgotpasswordService=forgotpasswordService;
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailId: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
  });
  }
  UpdatePassword()
  {
    console.log("forgot password component");
    console.log(this.register.emailId);
    console.log(this.register.password);
   this.forgotpasswordService.UpdatePassword(this.register).subscribe(
    (response:register)=>{
      this.register=response;
      console.log(this.register);
      
    }
        );
    }
    getUser(){
      this.forgotpasswordService.getUser(this.register).subscribe(
        (response:register)=>{
          this.register=response;
          console.log(this.register);
          
        }
      );
    }
login()
{
  this.router.navigate(['login']);
}
}

