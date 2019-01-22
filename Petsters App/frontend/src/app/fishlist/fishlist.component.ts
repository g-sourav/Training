import { Component, OnInit } from '@angular/core';
import { petService } from '../api/pet.service';
import { Router } from '@angular/router';
import {pet} from '../pet';
@Component({
  selector: 'app-fishlist',
  templateUrl: './fishlist.component.html',
  styleUrls: ['./fishlist.component.css']
})
export class FishlistComponent implements OnInit {

  fishs:any[]=[];
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
            if(petpojo.category=="fish")
            this.fishs.push(petpojo)
          }
      },
      error=>{
        this.errorMessage="System error or Contact Adminsitrator";
      }
  );
  }
  customerregister (fish: pet) {
    this.router.navigate(['customerregister', fish.pet_id]);
  }

}
