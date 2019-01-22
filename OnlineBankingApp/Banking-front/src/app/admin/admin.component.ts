import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }
  user:any;
  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
  }
  
  addaccount()
  {
    this.router.navigate(['addaccount',this.user]);
      
  }
  viewtransactions()
  {
    console.log("1");

    this.router.navigate(['Viewtransactions',this.user]);
      
  }
  myp
  myprofileClick()
  {

      
        this.router.navigate(['adminprofile',this.user]);
        console.log(this.user);

     
  
  }
  logout()   
     {
  
        this.router.navigate(['home']);
     }
  
}
