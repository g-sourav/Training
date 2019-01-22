import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from '../service/register.service';
import {register } from 'src/shared/model/register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  private registerService:RegisterService;
  statusCreation:String;
  register:register=new register();
  
  form= new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    mobileNumber:new FormControl('',[Validators.required,Validators.minLength(10)]),
    emailId:new FormControl('',[Validators.required,Validators.minLength(10)]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  constructor(
     regServ:RegisterService,
    private router: Router) {
      this.registerService=regServ;
        this.statusCreation=".";
     }

ngOnInit() {
    // this.registerForm= this.formBuilder.group({
    //   userName:new FormControl ('', [Validators.required]),
    //   mobileNumber:new FormControl ('', [Validators.required]),
    //     emailId:new FormControl ('', [Validators.required]),
    //     password: new FormControl('', [Validators.required])
    // });
}

public createUser(data){
  console.log("Hii")
    console.log(data.userName.value);
    console.log(this.register.userName);
    console.log(this.register.emailId);
    console.log(this.register.password);
    if(this.register.userName === undefined&&
      this.register.password === undefined && this.register.mobileNumber === undefined
      &&this.register.emailId===undefined){
      this.form.setErrors({invalid:true});
  }
    else {
      this.statusCreation=this.registerService.createUser(this.register);
    this.router.navigate(['login']);
    }
  }
  list;
 public getUser() {
    this.registerService.getUser().subscribe(
      data=>{
        this.list=data;
      }
    )
  }

}
