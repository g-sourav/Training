import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../api/signup.service';
import { Signup } from '../shared/model/signup';
import { Account } from '../shared/model/account';
import { Addrecepient } from '../shared/model/addrecepient';
import { Transactions } from '../shared/model/transactions';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css'],
  providers: [DatePipe]
})
export class TransferComponent implements OnInit {
  user:any;
  selectedValue:Addrecepient;
  account=new Account();
  isReadOnly = true;
  addrecepient=new Addrecepient();
  addrecp=new Addrecepient();
  addrecepient1:any;
  statusCreation:String;

  trans:Transactions = new Transactions();
  transAmt:BigInteger;
  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute,private dt:DatePipe) { }

  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
    this.signupservice.getAccbalance(this.user).subscribe( articleres => {
      this.account = articleres;
      
      });
     
      this.signupservice.getRecepientList().subscribe( articleres => {
        this.addrecepient1 = articleres;
        
        });
       
  }
  

  secondAcc: any;

  //event handler for the select element's change event


  transferclicked(account){
    this.trans.accountNo=this.account;
    this.trans.accountNo.balance=this.account.balance;
    this.trans.addrecepient= this.addrecp;
    this.trans.transferred_amount=this.transAmt;
    console.log(this.trans.accountNo.accno);
    this.trans.date_of_transaction=this.dt.transform(new Date,'dd-MM-yyyy');
    this.signupservice.performTransfer(this.trans).subscribe( articleres => {
    
     
      console.log(articleres);
      // this.statusCreation="Trasfer success";
      alert("Trasfer success")
      this.router.navigate(['viewbalance',this.user]);

      });
}
 
getOption(data:string){
  let arr=data.split(" ",3);
  this.addrecp.name=arr[0];
  this.addrecp.accno=arr[1];
  this.addrecp.ifsccode=arr[2];

  
  
  
  
  
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
myprofileClick()
{

    
      this.router.navigate(['viewcomponent',this.user]);
      console.log(this.user);

   

}

  }
  

