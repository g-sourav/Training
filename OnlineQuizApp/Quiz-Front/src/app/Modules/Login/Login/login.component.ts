import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
import { UserLog } from 'src/app/Models/UserLog';
import { DataService } from '../LoginServices/data-service.service';
import { AuthService } from '../LoginServices/auth.service';
import { GlobalUserDetailsService } from '../../User/UserServices/global-user-details.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user=new UserLog();
visible = false;
signup = true;
signout = false;


  constructor(
    private router: Router, 
    private dat:DataService,
    private auth:AuthService,
    private userData: GlobalUserDetailsService) { }

  ngOnInit() {
  }
  login(ad) {
    console.log(ad);
    
    if ((ad.uname === 'admin') && (ad.psw === '12345')) {
      this.router.navigate(['admin']);

  } else {
    this.user.userEmail=ad.uname;
    this.user.userPassword=ad.psw;
    console.log(this.user);
    this.dat.saveUserLogin(this.user).subscribe((response)=>{
     console.log(response);
     this.userData.setUser(response);
       Swal({type: 'info',
      title: 'Welcome to OnlineQuizApplication',
      text: this.user.userEmail});
    this.visible=true;
    this.auth.logIn(true);
    // this.app.change();
    this.router.navigate(['user']);
    },
    (error:Response) => {

      if(error.status === 400) {
        Swal({type: 'warning',
        title: 'Sorry...',
        text: 'Invalid credentials'}); } else {
        Swal({type:'error',
        title: 'Oops...',
        text:'User not found'});
        this.router.navigate(['signup']);
      }}
    )
}
}
}