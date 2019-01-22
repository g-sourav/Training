import { Component, OnInit } from '@angular/core';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { ShowUsersAdminService } from '../service/show-users-admin.service';
import { DeleteUserAdminService } from '../service/delete-user-admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  constructor(private showUsers: ShowUsersAdminService, private deleteUser: DeleteUserAdminService, private router: Router) { }

  ngOnInit() {
    this.showuser();
  }
  list;
  public showuser()
  {
    console.log("getting all users");
    this.showUsers.showAllUsers().subscribe(data=>{
      console.log(data);
      this.list=data;
      this.router.navigate(['../app-get-user']);
    });
  }

  public deleteuser(user: BorrowerDetails)
  {
    console.log(user.borrowerEmail);
    alert('User Deleted Successfully!');
    this.deleteUser.deleteUser(user);
    this.showuser();
  }
}
