import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BookingService } from '../api/booking.service';
import { CustomerService } from '../api/customer.service';
import { Customer } from '../customer';
import { getDefaultService } from 'selenium-webdriver/edge';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  mailId:String
  Cservice: CustomerService
  customer=new Customer();
  isavailable:boolean=true;
  @ViewChild('message') message: ElementRef;

  constructor(private service:CustomerService) {
     this.Cservice=service;

    this.mailId= localStorage.getItem("mailId");
     console.log()
      this.getUser(this.mailId);
   }
   
  ngOnInit() {
  }
  
  edit()
  {
    this.Cservice.updateCustomer(this.customer).subscribe(user=>{

     console.log("details edited");
     this.message.nativeElement.innerHTML="Profile details edited successfully";


  });


   }
  getUser(mailId){
    
    this.Cservice.getCustomer(mailId).subscribe(user=>{

      this.customer=user;
     console.log("user details got");


  }, error => {
    this.isavailable=false;
    }
  
);

  }


}
