import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import {location}from 'src/shared/model/location'
import { Router, ActivatedRoute } from '@angular/router';
import { carDetails } from 'src/shared/model/carDetails';
import { user } from 'src/shared/model/user';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  statusCreation:String;
locationService:LocationService;
carDetails:carDetails;
date:string;
location:location;
isloc=false;
list;
user:user;
carName:string;
  constructor(locationServ:LocationService,private router:Router,private activeRoute:ActivatedRoute,
    private login:LoginService) {
    this.locationService=locationServ;
    this.statusCreation='.';
   }
  ngOnInit() {
    this.user=this.login.user;
    this.locationService.getLocation().subscribe(
      data=>{
        this.list=data;
      }
    );
    this.carName=this.activeRoute.snapshot.paramMap.get('name');
    
    
  }
  showLocation(loc){
    this.isloc=true;
    this.location=loc;
    console.log(loc);
    console.log(this.user);
    
    console.log(this.carName);
    
    this.getCar();
    
  }
  confirm()
  {
    if(this.date!==undefined){
    this.locationService.car=this.carDetails;
    this.locationService.loc=this.location;
    this.locationService.date=this.date;
    console.log(this.date);
    this.router.navigate(['booking']);}
    else
      alert('Please select all the fields');
  }
  getCar(){
    this.locationService.getcarDetails(this.carName).subscribe(
      (response:carDetails)=>{
        this.carDetails=response;
        console.log(this.carDetails);
        
      }
    );
  }

}
