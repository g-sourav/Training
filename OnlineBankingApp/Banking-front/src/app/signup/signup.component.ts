import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/shared/model/signup';
import { SignupService } from '../api/signup.service';
import{Router} from '@angular/router';
import { Status } from '../shared/model/status';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // statusCreation:String;
  constructor(private signupservice:SignupService,private router:Router) { 
    }
    status:Status;
    aut:Boolean;

    user:String;
  signup= new Signup();
  ngOnInit() {
  }
  createUser(){

    this.user=this.signup.accnum;
  this.signupservice.authenticatesignup(this.signup).subscribe(data=>{
    this.status=data;
    console.log(this.status.authenticated);
    this.aut=this.status.authenticated;
    if(this.status.authenticated) {
      console.log(this.signup.uname);
      this.signupservice.createUser(this.signup).subscribe(data=>{
  
      });


        this.router.navigate(['login']);
    }
},
error=>{
  alert("Sorry!!, You are not a bank user");
  // this.statusCreation="Not a Valid AccountNumber";
this.router.navigate(['signup']);

});

  }
  home()   
     {
  
        this.router.navigate(['home']);
     }

}
