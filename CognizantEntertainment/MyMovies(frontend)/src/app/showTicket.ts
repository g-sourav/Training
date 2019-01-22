import { User } from "./shared/models/user.model";

export class ShowTicket{
    id:number;
    time:string;
    date:string;
    availSeats:number;
    movie:User;
    constructor(){
    }

}