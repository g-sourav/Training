import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import 'hammerjs';


@Component({
  selector: 'app-petshomepage',
  templateUrl: './petshomepage.component.html',
  styleUrls: ['./petshomepage.component.css']
})
export class PetshomepageComponent implements OnInit {


others = [ 'Birds', 'Fish', 'Horse'];
show: boolean;
show1: boolean;
show2: boolean;
show3: boolean;
show4: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
 
    this.show = true;
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
    this.show4 = true;
 

  }

dogs() {
  this.router.navigate(['dogs']);
}


  adminlogin(ad) {
    console.log(ad);
    console.log(this.show);
    console.log(this.show1);
    console.log(this.show2);

    if ((ad.uname === 'admin') && (ad.psw === '12345')) {
      this.router.navigate(['adminlogin']);
      this.show = false;
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
      
    }
    else
    {
        alert('Invalid Username Or Password Or You Are Not Authorized ');
    }
    console.log(this.show);
    console.log(this.show1);
    console.log(this.show2);
}
about()
{
  this.router.navigate(['/aboutus']);
  this.show4 = false;
}
contact()
{
  this.router.navigate(['/contactus']);
  this.show4 = false;
}
home()
{
  this.router.navigate(['/petshome']);
}


}
