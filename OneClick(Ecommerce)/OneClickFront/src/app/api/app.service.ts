import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/shared/Model/user';
import { Observable } from 'rxjs';
import { Login } from 'src/shared/Model/Login';
import { products } from 'src/shared/Model/products';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  http:HttpClient;
  statusRes:String;

  baseUrl:String='http://10.223.99.44:8080/OneClickApp/user/';

  constructor(h:HttpClient) { 
    this.http=h;
  }


  public getUser(user:User):Observable<Login>{
    console.log("App service");
    return this.http.post<Login>("http://10.223.99.44:8080/OneClickApp/user/getuserdetails",user)
  }

  public saveUser(user:User){
    console.log("App service");
    return this.http.post("http://10.223.99.44:8080/OneClickApp/user/adduserdetails",user)
  }

  public getproducts(categoryId:string){
        console.log("App service" + categoryId);
    return this.http.get<products[]>("http://10.223.99.44:8080/OneClickApp/electronicsM/productlist/"+categoryId)
  }

  public getproductitem(productId:string){
    console.log("App service" + productId);
return this.http.get<products[]>("http://10.223.99.44:8080/OneClickApp/electronicsM/product/"+productId)
}
public getproductbill (productId:string){
  console.log("Billing to App service" + productId);
  return this.http.get<products[]>("http://10.223.99.44:8080/OneClickApp/bill/finalproduct/"+productId)
}

public getsingleuser (userName:string){
  console.log("Billing to App service" + userName);
  return this.http.get<User>("http://10.223.99.44:8080/OneClickApp/bill/user/"+userName)

}

public retrieveuser(userName:string){

  console.log("Retriving");
  return this.http.get<User>("http://10.223.99.44:8080/OneClickApp/user/editsingleuser/"+userName);
}

public edituser (user:User){
  return this.http.put("http://10.223.99.44:8080/OneClickApp/user/edit",user)
}

public deleteuser(userName:string){
  console.log("in delete");
  return this.http.delete("http://10.223.99.44:8080/OneClickApp/user/delete/"+userName);
}


public getCartItems(userName:string){
  console.log("in cart");
  return this.http.get<products[]>("http://10.223.99.44:8080/OneClickApp/userCart/productlist/"+userName);
}

public toCart(cartobj:cart){
  console.log("cart service");
  return this.http.post("http://10.223.99.44:8080/OneClickApp/userCart/addProducttoCart",cartobj)
}

}