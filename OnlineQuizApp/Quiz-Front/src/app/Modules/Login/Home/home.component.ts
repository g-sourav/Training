import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/';
import { SecurityQuestion } from 'src/app/Models/SecurityQuestion';
import { SecurityService } from '../LoginServices/security.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sec: SecurityQuestion[] = [];
  constructor(private securityserv: SecurityService, private router: Router) {
   }

  ngOnInit() {
  }
  signup() {
    let arr = this.securityserv.loginServ();
    console.log(arr);

        this.router.navigate (['/signup']);
  }
  login() {
    // let arr = this.securityserv.loginServ();
    // console.log(arr);
    console.log('Login');
    
        this.router.navigate (['login']);
  }
  login1() {
    // let arr = this.securityserv.loginServ();
    // console.log(arr);
    console.log('Login');
    swal({
      type:'warning',
      titleText:'Please login to continue'
    })
        this.router.navigate (['login']);
  }



  private newMethod() {
    return this;
  }
}
