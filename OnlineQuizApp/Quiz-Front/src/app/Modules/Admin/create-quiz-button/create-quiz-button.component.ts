import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/Models/User';
import { GlobalUserDetailsService } from '../../User/UserServices/global-user-details.service';
// import { Router } from '@angular/router';
// import { ActivatedRoute} from '@angular/router';
// import { AppmenuComponent } from 'src/app/components/appmenu/appmenu.component';

@Component({
  selector: 'app-create-quiz-button',
  templateUrl: './create-quiz-button.component.html',
  styleUrls: ['./create-quiz-button.component.css']
})
export class CreateQuizButtonComponent implements OnInit {

  adminName : string="Admin";
  
  admin=new User();
  constructor(private router : Router,
    private userService:GlobalUserDetailsService) { }

  ngOnInit() {
    this.admin.userId=9999;
    this.admin.userName='admin';
    this.admin.userPassword='12345';
  }

  createQuiz(){
    this.userService.currentUser=this.admin;
    this.router.navigate(['admin/createquiz']);
    
  }
}
