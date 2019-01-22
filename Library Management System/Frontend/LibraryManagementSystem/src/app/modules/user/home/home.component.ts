import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { StoreUserDataService } from '../service/store-user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: BorrowerDetails = new BorrowerDetails();

  showProfileVar: boolean;
  profileButton: string;

  constructor(private router: Router, private userData: StoreUserDataService) {
  }

  ngOnInit() {

    this.user = this.userData.getUser();
    this.profileButton = "Show Profile"
    this.showProfileVar = false;

    let currentUrl = window.location.href;
    let tmvar = currentUrl.includes('/app-home');
    if (currentUrl.includes('/app-home')) {
      window.onpopstate = function (event) {
        history.go(1);
      }
    }

  }

  showProfile() {
    if (this.showProfileVar === true) {
      this.showProfileVar = false;
      this.profileButton = "Show Profile";
    }
    else {
      this.showProfileVar = true;
      this.profileButton = "Hide Profile";
    }
  }

  EditData(): void {
    console.log("from Edit");
    this.router.navigate(['/app-edit'])
  }
}
