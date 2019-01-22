import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineQuizAppFront';
  showComponent:boolean=true;
  showNewComponent:boolean=false;
  ngOnInit(){
    // this.router.navigate(['home']);
    
  }
  constructor(private router:Router){}
 
  hide(){
    this.showNewComponent=true;
    this.showComponent=false;
  }

  show(){
    this.showComponent=true;
    this.showNewComponent = false;
  }
}
