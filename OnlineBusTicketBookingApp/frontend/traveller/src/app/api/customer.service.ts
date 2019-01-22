import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Customer} from '../customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http:HttpClient;
  statusRes:String;

  baseUrl:String='http://localhost:4002/bus/';  
  constructor(h:HttpClient) { 
    this.http=h;
  }
  public createCustomer(customer:Customer){
    console.log("Customer service");
    console.log(customer.customerName);
    return this.http.post("http://localhost:4002/bus/registration",customer)
  }
  public updateCustomer(customer:Customer){
    console.log("Customer service");
    console.log(customer.customerName);
    return this.http.put("http://localhost:4002/bus/updateUser",customer)
  }
  getCustomer(mailId:String) {
    return this.http.get<Customer>(this.baseUrl +'cusDetails/'+mailId);
  }


  public deleteCustomer(mailId:String){
    console.log("Customer service");
    return this.http.delete(this.baseUrl +'deleteUser/'+mailId);
  }
  
  
  


}
