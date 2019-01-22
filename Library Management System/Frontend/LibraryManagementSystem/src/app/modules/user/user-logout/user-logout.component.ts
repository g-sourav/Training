import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private router:Router) {
    this.router=router;
   }

  ngOnInit() {
    // alert("You have been logged out!");
    // this.refresh();
  }

  refresh(): void {
    this.router.navigateByUrl('/app-root');
  }

}
