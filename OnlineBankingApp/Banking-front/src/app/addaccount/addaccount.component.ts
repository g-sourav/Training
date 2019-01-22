import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/shared/model/account';


@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }
  account= new Account();
  statusCreation:String;
  user:any;
  isavailable:boolean;


  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
    this.isavailable=true;
  }
  addaccount(account)
  {
    console.log(this.account.accno);
  this.signupservice.addAccount(this.account).subscribe(data=>{
    // this.statusCreation="Account Added successfully";
    alert("Account Added successfully");
    
  });
}

logout()   
   {

      this.router.navigate(['home']);
   }

   myprofileClick()
   {
 
       
         this.router.navigate(['adminprofile',this.user]);
         console.log(this.user);
 
      
   
   }

   viewtransactions()
   {
     console.log("1");
 
     this.router.navigate(['Viewtransactions']);
       
   }
  
  
  
}