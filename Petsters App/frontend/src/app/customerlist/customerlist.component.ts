import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../api/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
customer: any[] = [];
  constructor(private cust: CustomerService) { }

  ngOnInit() {
    this.cust.getcustomerlist().subscribe(
      data =>
      {
        this.customer = data;
      }

    );
  }

}
