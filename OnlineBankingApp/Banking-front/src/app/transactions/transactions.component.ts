import { Component, OnInit } from '@angular/core';
import { Transactions } from '../shared/model/transactions';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions: Transactions[];
  user:any;
  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
 this.user=this.route.snapshot.paramMap.get('id');


    this.signupservice.viewTransactionsbyAccnum(this.user).subscribe( articleres => {
      console.log("response transaction");

      this.transactions=articleres;
      
      console.log(this.transactions);
    
  }
  
  
  
  );

  console.log("ending transaction");



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
//  this.router.navigate([{ outlets: {route1: ['transfer',this.user] }}]);
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
myprofileClick()
{

    
      this.router.navigate(['viewcomponent',this.user]);
      console.log(this.user);

   

}
}
