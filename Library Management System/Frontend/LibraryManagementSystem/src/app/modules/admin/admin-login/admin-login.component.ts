import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public adminLogin(formData)
  {
    console.log("login into Admin");
   
    console.log(formData.adminUsername);
    console.log(formData.adminPassword);
    
    
    if(formData.adminUsername==="admin" && formData.adminPassword==="admin")
      this.router.navigate(['/app-admin-home'])
    else
      alert("Invalid admin credentials!");
    
  }

}
