import { Component } from '@angular/core';
import { User } from 'src/shared/Model/user';
import { AppService }    from './api/app.service';
import * as $ from 'jquery';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
import { TryCatchStmt } from '@angular/compiler';
import { Login } from 'src/shared/Model/Login';
import { NgForOf } from '@angular/common';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'OneClick';

  appService:AppService;
  isavailable=true;
  statusCreation: string=".";
  flag: Login;
  hide : boolean=true;
  logStatus : string="false";
  sw:boolean=false;
  Product : string;
  top:boolean;
  a:string;
  b:string;
  category:string;
  categoryName : string;
  abt:boolean=false;
  number:string;
  phonenumber:number;
  hideget : string;
  log: boolean;

  
  


  users: any;

  constructor(appSer:AppService,private router:Router,private route:ActivatedRoute) { 

    this.appService=appSer;

    this.log = JSON.parse(localStorage.getItem("logStatus"));
    

    if(localStorage.getItem("logStatus")=="true"){
      this.hide=false;
    }
    this.top=true;
   
    
     

//  this.a = this.route.snapshot.paramMap.get('logStatus');

  }




  user = new User();



getUser(){
  if((this.user.userName==null)||(this.user.password==null)){
    alert("all credentials required");
  }
  else{
  try{
  console.log(this.user.userName);
    console.log(this.user.password);
    this.appService.getUser(this.user).subscribe(data=>{
      this.flag=data;
      
      this.statusCreation="success";
      if(this.flag.status=="true"){
        localStorage.setItem("userName", this.flag.userName);
        document.getElementById('id01').style.display='none';
        alert("user logged in");
  
        this.logStatus="true";
        // this.router.navigate(['productpage',this.logStatus]);
        this.hide=false;
        localStorage.setItem("logStatus", "true");
        
      }
      else{
        alert("Invalid Username or Password !!");
        
      }
      
  });
}

catch{
  alert("something went wrong, try again !!")
}
}
}


saveUser(){

  if((this.user.email==null)||(this.user.name==null)||(this.user.password==null)||(this.user.phoneNumber==null)||(this.user.recentAddress==null)||(this.user.userName==null))
{ 
  console.log("in save");
  
  alert("Invalid Credentials");
}
    else{
    try{
    this.appService.saveUser(this.user).subscribe(data=>{
      this.statusCreation="success";
      alert("user created !!");
      document.getElementById('id02').style.display='none';
    
  })
  }
    catch(err){
      alert("user details already exists");
    }
  }

  
}


LogOut(){
  
  this.logStatus="false";
  // this.router.navigate(['productpage',this.logStatus]);
  localStorage.setItem("logStatus", "false");
  this.hide=true;
  
  
}

h2(){
this.categoryName = (<HTMLInputElement>document.getElementById('myInput')).innerHTML;
console.log(this.categoryName);

if(this.categoryName=="Mobiles"){
this.category="M100";
}
if(this.categoryName=="Laptops"){
  this.category="L200";
  }
  if(this.categoryName=="Men's wear"){
    this.category="MW300";
    }
    if(this.categoryName=="Women's wear"){
      this.category="FW400";
      }
      if(this.categoryName=="Non-Fiction Books"){
        this.category="BNF600";
        }
        if(this.categoryName=="Fiction Books"){
          this.category="BF500";
          }



  console.log(this.category);
this.router.navigate(['lproducts',this.category]);
this.sw=true;
}



toCart(){
  
  this.router.navigate(['tocart']);
}

Addabout(){
  this.sw=true;
}

userContinue(){
  this.hideget=localStorage.getItem("hideget");
    if(this.hideget=="true"){
      this.hide=false;
      
      localStorage.removeItem("hideget");
      this.logStatus="true";

    }
    else if(this.hideget=="false"){
      this.hide==true;
      
      localStorage.removeItem("hideget");
      this.logStatus="false";
    }
}
tophide(){
this.top=false;
}
topshow(){
  this.top=true;
  // this.logStatus="false";
  this.hide=false;
  
}
topshow1(){
  this.top=true;
  this.hide=true;
  
}

AddSettings(){
  if(localStorage.getItem("logStatus")=="true"){
    this.sw=true;
}
else{
  alert("please login first !!");
}

}



}
