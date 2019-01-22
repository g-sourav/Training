import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/Models/User';
import { GlobalUserDetailsService } from 'src/app/Modules/User/UserServices/global-user-details.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  adminName : string="Admin";
  admin=new User();

  constructor(private userService:GlobalUserDetailsService,
    private router:Router) { }

  ngOnInit() {
    this.admin.userId=9999;
    this.admin.userName='admin';
    this.admin.userPassword='12345';
  }
 createQuiz(){
      this.userService.currentUser=this.admin;
      this.router.navigate(['createquiz']);
 }


}
