import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../changepassword/password.validator';
import { ChangeUserPasswordService } from '../UserServices/change-user-password.service';
import { GlobalUserDetailsService } from '../UserServices/global-user-details.service';
import Swal from 'sweetalert2';
import { User } from 'src/app/Models/User';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  user = new User();
  oldPass: String;
  passwordFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private changePasswordService: ChangeUserPasswordService,
    private getUser: GlobalUserDetailsService
  ) {
    this.passwordFormGroup = this.formBuilder.group({
      oldpassword: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
        validator: PasswordValidator.validate.bind(this)
      });
  }

  ngOnInit() {
    this.user = this.getUser.getUser();
  }

  changePassword() {
    this.oldPass = this.passwordFormGroup.get('oldpassword').value;
    console.log(this.oldPass);
    if (this.oldPass === this.user.userPassword) {
      console.log(this.passwordFormGroup.get('password').value);
      console.log(this.passwordFormGroup.get('repeatPassword').value);
      if (this.passwordFormGroup.get('password').value === this.passwordFormGroup.get('repeatPassword').value) {
        this.user.userPassword = this.passwordFormGroup.get('password').value;
        this.changePasswordService.changeUserPassword(this.user);
        Swal({
          title: "Successful!",
          text: "Password changed successfully!",
          type: "success",
          confirmButtonText: "OK",
        });
      }
    }
    else
    Swal({
      title: "Oh no!",
      text: "Passwords do not match!",
      type: "error",
      confirmButtonText: "Try again?",
    });
  }



}
