import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Signup } from 'src/app/shared/model/signup';
import { Addrecepient } from 'src/app/shared/model/addrecepient';
import { Login } from '../shared/model/login';
import { Transactions } from '../shared/model/transactions';
import { Account } from '../shared/model/account';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

 

 acc1:Account;
 acc2:Addrecepient; 

  http:HttpClient;
  statusRes:String;
  status:Boolean;



  baseUrl:String='http://10.223.99.44:8080/bank/bankaccount/';

  constructor(h:HttpClient) { 
    this.http=h;
  }


public createUser(signup:Signup){
  console.log("Article service");
  
  return this.http.post("http://10.223.99.44:8080/bank/bankaccount/bankuser",signup)
}

public createRecepient(addrecepient:Addrecepient){
  console.log("recepinet service");
  this.acc2=addrecepient;
  return this.http.post("http://10.223.99.44:8080/bank/bankaccount/addrecepient",addrecepient);
}

public authenticate(login:Login){
  console.log("login");

  return this.http.post<any>("http://10.223.99.44:8080/bank/bankaccount/authenticate",login);
 

 
}
loggedIn :boolean =false;
customerId:number=1;
accountId:number;

logIn() {
this.loggedIn = true;
}

logOut() {
this.loggedIn = false;
}

getCustomerId() : number {
return this.customerId;
}


public getUserdata(id:BigInteger)
{
  
    return this.http.get<any>("http://10.223.99.44:8080/bank/bankaccount/bankuser/"+id);

}


public authenticatesignup(signup: Signup)
{console.log("retrghtrh");
  return this.http.post<any>("http://10.223.99.44:8080/bank/bankaccount/authenticatesignup",signup);
 
  
}


public updateUser(signup:Signup){
  
  
  return this.http.post("http://10.223.99.44:8080/bank/bankaccount/bankuser",signup)
}




public getAccbalance(id:BigInteger)
{
  
    return this.http.get<any>("http://10.223.99.44:8080/bank/bankaccount/balance/"+id);

}

public getRecepientList(){
  
  
  return this.http.get("http://10.223.99.44:8080/bank/bankaccount/recepient");
}

public performTransfer(trans:Transactions){
  return this.http.post("http://10.223.99.44:8080/bank/bankaccount/transfer",trans);
}

public viewTransactions(){
  
  console.log("3");

  return this.http.get<any>("http://10.223.99.44:8080/bank/bankaccount/viewtransactionlist");
}



public viewTransactionsbyAccnum(id:BigInteger){
  
    return this.http.get<Transactions[]>("http://10.223.99.44:8080/bank/bankaccount/transactionlist/"+id);
}

public addAccount(account:Account){
  console.log("account service");
  return this.http.post("http://10.223.99.44:8080/bank/bankaccount/addaccount",account);
}


}
