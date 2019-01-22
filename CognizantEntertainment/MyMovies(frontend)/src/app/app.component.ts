import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule }   from '@angular/forms';
import { DataService } from './data.service';
import { AdminDataService } from './admin-data.service';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2'
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'MyMovies';
  visible:boolean;
  Log=false;
  Sign=false;
  login=true;
  signup=true;
  signout=false;
  dash=true;
  public title1:any;
  public imageSrc:any;
  myParam: string;
  myVar:string="enter";

  constructor(private router:Router,private adminService:AdminDataService,
    private route: ActivatedRoute,private dc:DashboardComponent,
    private auth:AuthService){
    localStorage.setItem('visible','true');
  }
  ngOnInit(){
    this.router.navigate(['dashboard']);
    this.visible=JSON.parse(localStorage.getItem('visible'));
    this.myVar =  this.route.snapshot.params['enter'];
    console.log(this.myVar);
          if(this.myVar==="enter"){
            this.login=false;
            this.signup=false;
            this.signout=true;
          }
      }

  

    
  
  btnClick () {
    this.router.navigate(['login']);
    this.visible=false;
    this.Log=true;
    this.Sign=false;

}
btnClick1() {
  this.router.navigate(['signup']);
  this.visible=false;
  this.Sign=true;
  this.Log=false;

}

SignOut(){
  this.login=true;
  this.signup=true;
  this.signout=false;
  this.auth.logIn(false);
  this.router.navigateByUrl('dashboard');
  localStorage.removeItem('visible');
  localStorage.removeItem('isLogged');
  Swal({type:'success',
    title:'Thanks.....',
    text:'Logged out successfully'});
  }

  navigate(title:any,imageSrc:any){
    this.dc.navigate(title,imageSrc);
    // this.title=title;
    // this.imageSrc=imageSrc;
    // console.log(this.title);
    // console.log(this.imageSrc);
    //  this.adminService.setData(this.title,this.imageSrc);
    //  localStorage.setItem('visible','false');
    //  this.btnClick();
    //  this.visible=false;
    }
    btnClick3(){
    
 this.visible=true;
     this.Log=false;
   
    }
    change(){
      this.login=false;
  this.signup=false;
  this.signout=true;
    }


}
