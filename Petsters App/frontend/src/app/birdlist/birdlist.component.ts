import { Component, OnInit } from '@angular/core';
import { petService } from '../api/pet.service';
import { pet } from '../pet';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-birdlist',
  templateUrl: './birdlist.component.html',
  styleUrls: ['./birdlist.component.css']
})
export class BirdlistComponent implements OnInit {

  birds:any[]=[];
  i:number=0;
  public errorMessage;

  constructor(private pets:petService, private router: Router ) { 
   
  }

  ngOnInit() {
    console.log("Inside emplist Onint : Getting all Employees");
    this.pets.getpets().subscribe(
      data => {
          for(let petpojo of data){
            console.log(petpojo)
            if(petpojo.category=="bird")
            this.birds.push(petpojo)
          }
      },
      error=>{
        this.errorMessage="System error or Contact Adminsitrator";
      }
  );
  }
  customerregister (bird: pet) {
    this.router.navigate(['customerregister', bird.pet_id]);
  }
}
