import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showComponent:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  hide(){
    this.showComponent=false;
  }

  show(){
    this.showComponent=true;
  }
}
