import { Component, OnInit } from '@angular/core';
import { DeactivateUserAccountService } from '../UserServices/deactivate-user-account.service';
import { GlobalUserDetailsService } from '../UserServices/global-user-details.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import { User } from 'src/app/Models/User';
@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})
export class DeactivateComponent implements OnInit {
  reason:String;
  user=new User();
  constructor(
    private deactivateService: DeactivateUserAccountService,
    private getUserData: GlobalUserDetailsService,
    private router: Router
    ) { }

  ngOnInit() {
    this.user=this.getUserData.getUser();
  }
  
  async deactivate() {
    const {value: password} = await Swal({
      title: 'Enter your password',
      input: 'password',
      inputPlaceholder: 'Enter your password',
      inputAttributes: {
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })
    
    if (password) {
      if(password===this.user.userPassword) {
        this.deactivateService.deactivateUserAccount(this.user.userEmail);
        Swal({
          title: "Account Successfully deactivated !",
          text: "We hope to see you again.",
          type: "success"
        });
        this.router.navigate(['']);
      }
      else
        Swal({
          text: "Invalid Password!",
          type: "warning"
        });
    }
  }
}
