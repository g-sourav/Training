import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { GlobalUserDetailsService } from '../../UserServices/global-user-details.service';

@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {

  user: User = new User();

  constructor(private getUser: GlobalUserDetailsService,
    private router: Router) {
  }

  ngOnInit() {
    this.user = this.getUser.getUser();
  }


}
