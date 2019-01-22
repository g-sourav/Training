import { Injectable } from '@angular/core';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';

@Injectable({
  providedIn: 'root'
})
export class StoreUserDataService {

  private user: BorrowerDetails=new BorrowerDetails();  

  constructor() { }

  setUser(user: BorrowerDetails) {
    this.user=user;
  }

  getUser() {
    return this.user;
  }
  
}
