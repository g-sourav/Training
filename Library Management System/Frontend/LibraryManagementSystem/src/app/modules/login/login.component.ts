import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowerLoginService } from './service/borrower-login.service';
import { BorrowerDetails } from '../Pojo/BorrowerDetails';
import { StoreUserDataService } from '../user/service/store-user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  borrower: BorrowerDetails=new BorrowerDetails();
  data;
  
  constructor(private router:Router, private borrowerLogin: BorrowerLoginService, private userData: StoreUserDataService) {
    this.router=router;
   }

  ngOnInit() {
  }
  
  checkLogin(data){
    this.data=data;
    console.log(data);
    console.log("inside checkLogin");
    
    this.borrowerLogin.borrowerLogin(data.borrowerEmail).subscribe((response:BorrowerDetails)=>{
      
      this.borrower=response;
      
      if(this.borrower.borrowerPassword===this.data.borrowerPassword) {

        this.userData.setUser(this.borrower);
        this.router.navigate(['app-home']);

      }
      else {
        alert("Invalid email and/or password!! Please Try again..");
      }
      

    });
  }
}
