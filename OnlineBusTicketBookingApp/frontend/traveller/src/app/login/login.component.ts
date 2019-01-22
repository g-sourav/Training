import { Component, OnInit } from '@angular/core';
import {LoginService} from '../api/login.service';
import {Login} from '../login';
import {RouterModule, Router} from '@angular/router';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('message') message: ElementRef;

   loginService:LoginService;
   statusCreation:String;
    isTrue:boolean=true;
    mailId:string;
    router:Router;
    
    
  logIn=new Login();
  constructor(private r:Router, loginSer:LoginService) {
    this.router=r;
    this.loginService=loginSer;
    this.statusCreation=".";
  }

  ngOnInit() {



  }
  
  login(){
    this.loginService.login(this.logIn).subscribe((res:Response)=>{
      this.statusCreation="Article creation success";
      if (res===null) {
        console.log('Response: ', res);
        this.router.navigate(['/PlaceListPage',this.logIn.emailId]);
        localStorage.setItem("mailId", ""+this.logIn.emailId);

      }
    }, error => {
      if (error.status === 409) {
        console.log('Error');
        this.message.nativeElement.innerHTML="Either user name or password is wrong";
      }
    });

    
  }

}
