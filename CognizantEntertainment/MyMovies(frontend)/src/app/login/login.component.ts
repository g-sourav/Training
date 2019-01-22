import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule, NgForm }   from '@angular/forms';
import { DataService } from '../data.service';
import { UserDetails } from '../user-details';
import { AppComponent } from '../app.component';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2'
import { ShowPageService } from '../show-page.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new UserDetails();
  visible=false;
  login=true;
  signup=true;
  signout=false;
  enter:string="enter";
  constructor(private router:Router,private dat:DataService,private app:AppComponent,
    private auth:AuthService,private show:ShowPageService){}
    btnClick1 () {
    this.router.navigate(['signup']);
    this.visible=true;
    };

  ngOnInit() {
    
  }
  saveUserLogin(empForm:NgForm):void{
this.dat.saveUserLogin(this.user).subscribe((response)=>{
 console.log(response);
Swal({type:'info',
  title:'Welcome to cE',
  text:this.user.email});
this.visible=true;
this.auth.logIn(true);
this.show.book.user=this.user;
this.app.change();
this.router.navigate(['dashboard']);
},
(error:Response)=>{
  
  if(error.status===400)
    Swal({type:'warning',
    title: 'Sorry...',
    text:'Invalid credentials'});
  else{
    Swal({type:'error',
    title: 'Oops...',
    text:'User not found'});
    this.router.navigate(['signup']);
  }
  
}

)

  }
}
