import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.component.html',
  styleUrls: ['./customerservice.component.css']
})
export class CustomerserviceComponent implements OnInit {

  constructor(private app:AppComponent) { }

  ngOnInit() {
    // this.app.change();
  }

}
