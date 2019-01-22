import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalUserDetailsService } from '../UserServices/global-user-details.service';
import { UpdateUserService } from '../UserServices/update-user.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isavailable: boolean;
  user: User = new User();
  updatedUser= new User();
  isReadOnly = true;
  isselected: boolean;

  constructor(
    private updateUserService: UpdateUserService, 
    private getUser: GlobalUserDetailsService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.isavailable = true;
    this.user=this.getUser.currentUser;
    this.updatedUser=this.user;
  }


  gotoEdit() {
    this.isavailable=false;
  }


  update() {
    console.log(this.updatedUser);
    this.user=this.updatedUser;
    this.getUser.currentUser=this.updatedUser;
    this.updateUserService.updateUserDetails(this.updatedUser);
    Swal({
      title: "Successful!",
      text: "Profile Updated successfully!",
      type: "success",
      confirmButtonText: "OK",
    });
    this.isavailable = true;
  }

}
