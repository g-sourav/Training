import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../admin-data.service';
import { User } from '../shared/models/user.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  user: User;
  public user1:User[]=[];
  public errorMsg;
  public imagePath;
  constructor( private adminS:AdminDataService,private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    console.log('Hii i am in');
    this.adminS.getEmployees()
                .subscribe(data=>{this.user=data;
                  this.adminS.movie=data;
                  console.log(this.user);                
    });
                  

      
  }




}
