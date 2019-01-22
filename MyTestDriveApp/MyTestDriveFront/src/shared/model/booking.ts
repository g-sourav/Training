import { location } from "./location";
import { user } from "./user";
import { carDetails } from "./carDetails";
import { register } from "./register";

export class booking{
    user:register;
    carDetails:carDetails;
    location:location;
    date:string;
}