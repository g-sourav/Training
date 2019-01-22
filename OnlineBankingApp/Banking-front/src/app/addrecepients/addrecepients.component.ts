import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Addrecepient } from 'src/app/shared/model/addrecepient';
import { Router,ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-addrecepients',
  templateUrl: './addrecepients.component.html',
  styleUrls: ['./addrecepients.component.css']
})
export class AddrecepientsComponent implements OnInit {



user:any;
statusCreation:String;


  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { 

   
  
   
  }
  
addrecepient= new Addrecepient();
ngOnInit() {
  this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
}



createRecepient(){
  console.log(this.addrecepient.name);
  this.signupservice.createRecepient(this.addrecepient).subscribe(data=>{
    // this.statusCreation="Recepient Added successfully";
    alert("Recepient Added successfully")

  }
    );
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


