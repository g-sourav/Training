import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  adminName : string="Admin";
  adminMail : string="admin@example.com"

  constructor(private router:Router) { }

  ngOnInit() {
  }

  signout() {
    this.router.navigate(['']);
  }

}
