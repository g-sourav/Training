import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


})
export class HomeComponent implements OnInit {

  isTrue:boolean;
        isSelected:boolean;
  constructor(private router : Router) {
        // customize default values of carousels used by this component tree
      
      }

 

  signupbtnClick()
   { this.isTrue=true;
            this.router.navigate(['signup']);
            this.isSelected=false;
    }
    ngOnInit() {
      this.isTrue=false;
        this.isSelected=true;

    }
    loginbtnClick()
   {
            this.router.navigate(['login']);
    this.isSelected=false;
    }
            
    }
    


