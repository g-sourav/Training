import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../api/customer.service';
import { customer } from '../customer';
import { ActivatedRoute } from '@angular/router';
import { petService } from '../api/pet.service';
import { pet } from '../pet';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: CustomerService;
  cust: customer[];
msg: any;
petId: string;
petPojo:pet;
  constructor(private cservice: CustomerService, private route:ActivatedRoute,private petServ:petService) {
    this.customer = cservice;
    this.petId = this.route.snapshot.paramMap.get('petId');
    console.log(this.petId);
    this.petServ.getPet(this.petId).subscribe(response => {
      this.petPojo = response;
      console.log("after response");
      console.log(this.petPojo);
      });

   }
   c = new customer() ;

  ngOnInit() {
    

  }

  create() {
  this.customer.createCustomer(this.c);
  }

registermsg () {
    console.log("inside register");
    console.log(this.petId);
    alert('You Have Adopted A Pet Successfully');
    this.petServ.changePetStatus(this.petId);
  
  }


}
