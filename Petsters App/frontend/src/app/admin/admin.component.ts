import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Location } from '@angular/common';
import { from } from 'rxjs';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private location: Location) {

   }

  ngOnInit() {

    let currentUrl: String;
    currentUrl = window.location.href;

    if (currentUrl.includes('/app-admin')) {
      window.onpopstate = function(event) {
        history.go(1);
      };
    }

  }

  petregister() {
    this.router.navigate(['petregister']);

  }

  navigate() {
    this.router.navigate(['logout']);
  }

  customerlist() {
    this.router.navigate(['customerlist']);
  }
}
