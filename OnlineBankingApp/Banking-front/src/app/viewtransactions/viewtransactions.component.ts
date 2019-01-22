import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/shared/model/account';
import { Transactions } from 'src/app/shared/model/transactions';



@Component({
  selector: 'app-viewtransactions',
  templateUrl: './viewtransactions.component.html',
  styleUrls: ['./viewtransactions.component.css']
})
export class ViewtransactionsComponent implements OnInit {

  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }
  transactions= new Transactions();
  statusCreation:String;
  user:any;
  isavailable:boolean;
  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
    this.isavailable=true;
      console.log("2");
  
      this.signupservice.viewTransactions().subscribe(data=>{
        this.transactions = data;
 
      });
    }   
  
    addaccount()
    {
      this.router.navigate(['addaccount',this.user]);
        
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
   
       this.router.navigate(['Viewtransactions',this.user]);
         
     }
    
    
    
  
  }


