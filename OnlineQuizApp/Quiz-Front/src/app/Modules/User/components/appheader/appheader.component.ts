import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { GlobalUserDetailsService } from '../../UserServices/global-user-details.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {

  user: User = new User();

  constructor(private getUser: GlobalUserDetailsService,private router: Router) {
   }

  ngOnInit() {
    this.user=this.getUser.getUser();
  }

  signout() {
    this.router.navigate(['']);
  }

}
