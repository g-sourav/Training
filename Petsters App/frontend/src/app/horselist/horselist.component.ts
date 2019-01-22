import { Component, OnInit } from '@angular/core';
import { petService } from '../api/pet.service';
import { Router } from '@angular/router';
import { pet } from '../pet';
import {DomSanitizer} from 'node_modules/@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'app-horselist',
  templateUrl: './horselist.component.html',
  styleUrls: ['./horselist.component.css']
})


export class HorselistComponent implements OnInit {

  horses:any[]=[];
  i:number=0;
  public errorMessage;
  

  constructor(private pets:petService, private router: Router,private _DomSanitization: DomSanitizer) { 
   
  }

  ngOnInit() {
   
    this.pets.getpets().subscribe(
      data => {
          for(let petpojo of data){
            console.log(petpojo)
            if(petpojo.category=="horse")
            this.horses.push(petpojo)
          }
      },
      error=>{
        this.errorMessage="System error or Contact Adminsitrator";
      }
  );
  }
  customerregister (horse: pet) {
    this.router.navigate(['customerregister', horse.pet_id]);
  }
}
