import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';
import { User } from 'src/shared/Model/user';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
appservice:AppService;
appcomponent:AppComponent;
userName:string;
user=new User();
  constructor(private router:Router,private route:ActivatedRoute,private app: AppService, private com:AppComponent) { 

this.appservice=app;
this.appcomponent=com;

this.userName=localStorage.getItem("userName");


   }

  ngOnInit() {

 this.appcomponent.tophide();
this.appservice.retrieveuser(localStorage.getItem("userName")).subscribe(response=>{
  this.user=response;
  console.log(this.user.email);
    });
    
  }

  edit(){
this.appservice.edituser(this.user).subscribe(data=>{
  alert("Details Updated");
  this.router.navigate(['home1']);
  localStorage.setItem("logStatus","true");

});

  }

  deleteuser(userName :string){
    this.appservice.deleteuser(userName).subscribe(data =>{
       alert("user deleted");
    });
   localStorage.removeItem("userName");
    localStorage.setItem("logStatus","false");
    this.router.navigate(['home2']);
  }
}
