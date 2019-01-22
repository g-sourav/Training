import { Addrecepient } from "./addrecepient";
import { Account } from "./account";

export class Transactions {


    id:BigInteger;
	date_of_transaction :String;
    
	addrecepient :Addrecepient;
    accountNo:Account; 
    remaining_bal:BigInteger;
    transferred_amount:BigInteger;
    
}

