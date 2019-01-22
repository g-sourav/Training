import { Component, OnInit } from '@angular/core';
import { SignupService } from '../api/signup.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Signup } from '../shared/model/signup';

@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {

  constructor(private signupservice:SignupService,private router:Router,private route: ActivatedRoute) { }
user:any;
isavailable:boolean;
signup=new Signup();
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


  });         
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
  addaccount()
  {
    this.router.navigate(['addaccount',this.user]);
      
  }
 

}