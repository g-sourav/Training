import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  private auth:boolean = JSON.parse(localStorage.getItem('isLogged')) ||false;
  constructor() { }
  get isLoggedIn() {
    return this.auth;
  }
  logIn(value){
    this.auth=value;
    localStorage.setItem('isLogged',JSON.stringify(value));
  }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
