import { BookTicket } from "./bookTicket";

export class UserDetails {
    id:number;
    email:string;
    password:string;
    phonenumber:string;
    tickets:BookTicket[];
    private auth:boolean;
  constructor(){
      this.auth=false;
    
  }
  setLoggedIn(email){
      this.auth=true;
    
  }
  getLoggedIn(){
      return this.auth;
  }

}
