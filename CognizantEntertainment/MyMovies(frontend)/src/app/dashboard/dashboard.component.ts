import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '../admin-data.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   public title:any;
   public imageSrc:any;
   visible:boolean;
   Log:boolean=true;
    
  constructor( public router:Router,public adminService:AdminDataService) { }

  ngOnInit() {
     
  }

   
  navigate(title:any,imageSrc:any){
   this.title=title;
   this.imageSrc=imageSrc;
   console.log(this.title);
   console.log(this.imageSrc);
    this.adminService.setData(this.title,this.imageSrc);
    localStorage.setItem('visible','false');
    this.btnClick();
   
   }
   btnClick(){
   
this.visible=true;
    this.Log=false;
    this.router.navigate(['movie']);
   }
}
