import { Component, OnInit } from '@angular/core';
import { petService } from '../api/pet.service';
import {  Router } from '@angular/router';

import { pet } from '../pet';
@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.css']
})
export class CatlistComponent implements OnInit {

  cats:any[]=[];
  i:number=0;
  public errorMessage;

  constructor(private pets:petService, private router: Router) { 
   
  }

  ngOnInit() {
    console.log("Inside emplist Onint : Getting all Employees");
    this.pets.getpets().subscribe(
      data => {
          for(let petpojo of data){
            console.log(petpojo)
            if(petpojo.category=="cat")
            this.cats.push(petpojo)
          }
      },
      error => {
        this.errorMessage='System error or Contact Adminsitrator';
      }
  );
  }
  customerregister (cat: pet) {
    this.router.navigate(['customerregister',  cat.pet_id]);
  }
}
