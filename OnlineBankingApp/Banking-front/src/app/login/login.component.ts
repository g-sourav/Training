import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Signup } from 'src/app/shared/model/signup';
import { Router,ActivatedRoute } from '@angular/router';
import { Login } from '../shared/model/login';
import { Status } from '../shared/model/status';
import { standardizeConfig } from '@angular/router/src/config';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login1= new Login();
  status:Status;
  user:BigInteger;
  statusCreation:String;
  form = new FormGroup({
    username: new FormControl(
      '',[Validators.required,
     /* Validators.minLength(2),
      Validators.maxLength(10),*/
      ]),

  password: new FormControl(
      '',
      [Validators.required,
     /* Validators.minLength(2),
      Validators.maxLength(10)*/]),

  });
  
  constructor(private router:Router,private signupservice:SignupService) { }
  ngOnInit() {
    
  }
login()
{
 

  this.user=this.login1.uid;
  this.signupservice.authenticate(this.login1).subscribe(data=>{
    this.status=data;
    
  
    console.log(this.status);
    
    if(this.status.authenticated) {
      
      {
        if(this.status.adminauthenticated)
        {
          this.router.navigate(['picadmin',this.user]);
        }
        else{
          this.router.navigate(['font',this.user]);
        }
    }
  
     
    }
      else
      {
      this.router.navigate(['login']);
      this.statusCreation="Invalid Credentials";
      }
      this.statusCreation="Invalid Credentials";
     
});


}



signupbtnClick()
   { 
            this.router.navigate(['signup']);
            
    }

    home()   
    {
 
       this.router.navigate(['home']);
    }

}
