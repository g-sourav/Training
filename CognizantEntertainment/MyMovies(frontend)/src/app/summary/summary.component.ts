import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AdminDataService } from '../admin-data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  public user1:User;
  use=new User();
  movie:string;
  descipt:string;
  constructor(private adminSer:AdminDataService) { }

  ngOnInit() {
     this.adminSer.getEmployees()
                  .subscribe(data=>{this.user1=data,
                    console.log(this.user1);
                    this.adminSer.movie=this.user1;
                  });
                   
  }
}
