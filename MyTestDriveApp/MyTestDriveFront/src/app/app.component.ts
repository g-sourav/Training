import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-drive';
  isTrue:boolean;
 isLogin:boolean;
  isLogout:boolean=false;
  
  constructor(private router:Router){
  this.isTrue=JSON.parse(localStorage.getItem('isTrue'))||false;
  this.isLogin=true;
  }
  ngOnInit(){
    
  }
  loginbtn(){
    this.isTrue=true;
    this.router.navigate(['login']);

  };
  changeLog(){
    this.isLogin=false;
    this.isLogout=true;
  }
  logoutbtn(){
    this.isLogin=true;
    this.isLogout=false;
    localStorage.removeItem('isTrue');
    this.router.navigate(['app']);
  }
  change(){
    this.isTrue=true;
  }
}
