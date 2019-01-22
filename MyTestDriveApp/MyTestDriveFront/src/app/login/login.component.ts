import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { user } from 'src/shared/model/user';
import { LoginService } from '../service/login.service';
import { register } from 'src/shared/model/register';
import { AppComponent } from '../app.component';




@Component({
  selector:'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']})
export class LoginComponent implements OnInit {
  user1:user=new user();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  statusCreation:String;
  form = new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)])
  });
  constructor(private loginService:LoginService,
    private router: Router,
    private formBuilder:FormBuilder,
    private app:AppComponent)
     { 


    this.statusCreation=".";
  }
  registerbtn=function(){
    this.router.navigate(['register']);
  };
  
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          userName:new FormControl ('', [Validators.required]),
          password: new FormControl('', [Validators.required])
      });

     
  }
  ValidateUser(){
    console.log("login component");
    console.log(this.user1.userName);
    console.log(this.user1.password);
  this.loginService.ValidateUser(this.user1).subscribe(
      (response:register)=>{
        localStorage.setItem('isTrue','true');
        this.loginService.user=response;
        console.log(this.loginService.user);
        this.app.changeLog();
        this.router.navigate(['booktestdrive']);
      },
      (error:Response)=>{
        if(error.status===400)
          this.form.setErrors({invalid:true});
        else{   
          alert("No such user found");
          this.router.navigate(['register']);
      }
    }
    );
  }
  setNewPassword(){
    this.router.navigate(['forgot-password']);
  }

}