import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CustomerService} from '../api/customer.service';
import {Customer} from '../customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  customerService:CustomerService;
  isAvailable:boolean=true;
  statusCreation:String;
  router:Router;
  @ViewChild('message') message: ElementRef;

  customer=new Customer();
  constructor(private r:Router,private customerSer:CustomerService) { 
    this.router=r;
    this.customerService=customerSer;
    this.statusCreation=".";
  }
  ngOnInit() {
 }
  

 
 register(){
  console.log(this.customer.customerName);
  this.customerService.createCustomer(this.customer).subscribe(data=>{
    this.statusCreation="Customer  creation success";
   if(data===null)
   {
    this.router.navigate(['/loginForm']);
   }
  }, error => {
    if (error.status === 409) {
      console.log('Error');
      this.message.nativeElement.innerHTML="Details already exists, try with another";
    }
  });
}

}
