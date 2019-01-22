import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../api/signup.service';
import { Signup } from '../shared/model/signup';
import { Account } from '../shared/model/account';

@Component({
  selector: 'app-viewbalance',
  templateUrl: './viewbalance.component.html',
  styleUrls: ['./viewbalance.component.css']
})
export class ViewbalanceComponent implements OnInit {
  user:any;
account=new Account();

  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {



    this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
    this.signupservice.getAccbalance(this.user).subscribe( articleres => {
      this.account = articleres;
      console.log("end of service");
        console.log("end of service");
      });
       
        
  }
  myprofileClick()
  {

      
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
      this.router.navigate(['transactionlist',this.user]);
     }

     addRecepientsbtnClick()
     {

      this.router.navigate(['recepient',this.user]);
      console.log(this.user);

       
        
     
     }
  
}
