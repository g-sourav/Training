import { Component, OnInit } from '@angular/core';
import { petService } from '../api/pet.service';
import {  Router } from '@angular/router';
import {pet} from '../pet';
@Component({
  selector: 'app-doglist',
  templateUrl: './doglist.component.html',
  styleUrls: ['./doglist.component.css']
})
export class DoglistComponent implements OnInit {

  dogs: any[] = [];
  i = 0;
  public errorMessage;


  constructor(private pets: petService, private router: Router) {
  }

  ngOnInit() {
    console.log('Inside emplist Onint : Getting all Employees');
    this.pets.getpets().subscribe(
      data => {
          for (let petpojo of data) {
            console.log(petpojo)
            if ( petpojo.category === 'dog')
            this.dogs.push(petpojo)
          }
      },
      error => {
        this.errorMessage = 'System error or Contact Adminsitrator';
      }
  );
  }

  customerregister( dog: pet) {
    this.router.navigate(['customerregister', dog.pet_id]);
  }

}
