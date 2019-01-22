import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagementSystem';

 router:Router;
 constructor(private route:Router) { 
   this.router=route;
 }
 ngOnInit() {
 }


 public isVisible: boolean = true;
 
 toggle() {
     this.isVisible = !this.isVisible;
 }
 
 gotoLogin():void{
   console.log("inside myNavigate");
   
   this.router.navigate(['/app-login']);
 }
 gotoAdminLogin():void{
  console.log("inside myNavigate");
  
  this.router.navigate(['/app-admin-login']);
}
}
