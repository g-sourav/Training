
import { Injectable } from '@angular/core';
import { customer } from 'src/app/customer';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class CustomerService {

  http:HttpClient;
  statusRes:String;



  constructor(h: HttpClient) { 
    this.http = h;
  }


public createCustomer(customer : customer){
  console.log("customer service");
  console.log(customer.name);  console.log(customer.gender);
  console.log(customer.phone); console.log(customer.email);
  console.log(customer.city);  console.log(customer.address);
   this.http.post( '/PETSTERS/user/customer', customer).subscribe(
     response=>{console.log(response)}
     
   );
}
getcustomerlist()
{
 return  this.http.get<customer[]>('/PETSTERS/user/list');
}




}
