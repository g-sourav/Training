import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  isHome: boolean=false;
  constructor(private router: Router) { }

  ngOnInit() { 
    this.checkHome();
  }

  checkHome() {
    if (this.router.url==="/app-admin-home")
      this.isHome=true;
  }

}
