import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-test-drive',
  templateUrl: './book-test-drive.component.html',
  styleUrls: ['./book-test-drive.component.css']
})
export class BookTestDriveComponent implements OnInit {
  
 
  constructor(private route:Router ) {

   }
  ngOnInit() {

  }
showCarname(name){
  this.route.navigate(['NotificationPage',name]);
}
}



















