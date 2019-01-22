import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { SignupService } from '../api/signup.service';
import { Signup } from '../shared/model/signup';
import { Account } from '../shared/model/account';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

  user:any;
  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
 this.user=this.route.snapshot.paramMap.get('id');


 console.log("hii");
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
