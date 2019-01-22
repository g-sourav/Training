import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../api/signup.service';
import { Signup } from '../shared/model/signup';
import { Account } from '../shared/model/account';



@Component({
  selector: 'app-fontadmin',
  templateUrl: './fontadmin.component.html',
  styleUrls: ['./fontadmin.component.css']
})
export class FontadminComponent implements OnInit {
  user:any;
  account=new Account();
  // isSelected:boolean;
  
    constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }
  
    ngOnInit() {
      this.user=this.route.snapshot.paramMap.get('id');
      console.log(this.user);
      // this.isSelected=true;
     this.router.navigate(['picadmin',this.user]);
    }
    myprofileClick()
    {
  
        //  this.isSelected=false;
          this.router.navigate(['viewcomponent',this.user]);
          console.log(this.user);
  
    
    }
    logout()   
       {
    
          this.router.navigate(['home']);
       }
      
       checkbalancebtnClick()
       {
        this.router.navigate(['viewbalance',this.user]);
        console.log(this.user);
         
          
       
       }
  
       transferbtnClick()
       {
        this.router.navigate(['transfer',this.user]);
  
       }
  
       accountSummarybtnClick()
       {
        // this.isSelected=false;
        this.router.navigate(['transactionlist',this.user]);
  
       }
  
       addRecepientsbtnClick()
       {
        // this.isSelected=false;
        this.router.navigate(['recepient',this.user]);
        console.log(this.user);
       
  
         
          
       
       }
    
  }
  

