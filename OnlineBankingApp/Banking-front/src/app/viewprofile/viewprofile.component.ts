import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Signup } from '../shared/model/signup';




@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  user:any;
  isavailable:boolean;
  signup=new Signup();
  isReadOnly = true;
  isselected:boolean;
  


  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }

 

  ngOnInit() {
    this.user=this.route.snapshot.paramMap.get('id');
    console.log(this.user);
    this.isavailable=true;


    this.retrieveArticle(this.user)



    
  }

  retrieveArticle(id){
  this.signupservice.getUserdata(id).subscribe( articleres => {
  this.signup = articleres;
    console.log("end of service");
    
  });
}
id1:BigInteger;

editUser(id){
 this.id1=id;

  this.signupservice.updateUser(this.signup).subscribe( articleres => {
    
    console.log("end of service");
    this.retrieveArticle(id)
    this.isavailable=false;


  });
 
}



createUser(signup){
  console.log(this.signup.uname);
  this.signupservice.createUser(this.signup).subscribe(data=>{

    this.isavailable=true;


  }
    );         
   


}

logout()
{
  this.router.navigate(['home']);
}
myprofileClick()
  {

      this.isavailable=true;
      this.retrieveArticle(this.id1)

        console.log(this.user);

     
  
  }
  back(acc)
  {
    this.router.navigate(['Mainpage',this.user]);

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
