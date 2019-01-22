import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule, NgForm }   from '@angular/forms';
import {FormGroup, FormControl, Validators,EmailValidator } from '@angular/forms';
import { UserDetails } from '../user-details';
import { DataService } from '../data.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new UserDetails();
  visible=false;
  form=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
    password:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  });
  constructor(private router:Router,private serv:DataService) { }
  btnClick () {
    this.visible=true;
    this.router.navigate(['login']);
    };

  ngOnInit() {
  }
  saveUserSignup(empForm:NgForm):void{
    console.log(empForm.value)
  }
  login(f){
    console.log(this.user);
    this.serv.login(this.user);
    this.visible=true;
    swal({type:'success',
    title:'Registered Successfully'});
    this.router.navigate(['login']);
    }
  
  get Email(){
    return this.form.get('email');
  }
  get Password(){
    return this.form.get('password');
  }
  get PhoneNumber(){
    return this.form.get('phone');
  }
}
