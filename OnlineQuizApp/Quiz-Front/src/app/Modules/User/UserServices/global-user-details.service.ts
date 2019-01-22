import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/User';

@Injectable({
  providedIn: 'root'
})
export class GlobalUserDetailsService {

  currentUser: User = new User();

  constructor() {
  
   }

  setUser(user: User) {
    this.currentUser=user;
  }

  getUser() {
    return this.currentUser;
  }

}
