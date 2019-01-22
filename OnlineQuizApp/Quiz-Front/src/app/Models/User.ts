
export class User {

	userId:number;
	userName:String;
	userEmail:String;
	userPassword:String;
	userGender:String;
	userStatus:boolean;
	userSecurityAnswer:String;
	userQuesId:number;

private auth: boolean;
constructor() {
    this.auth = false;
}
setLoggedIn(userEmail) {
    this.auth = true;
}
getLoggedIn() {
    return this.auth;
}

}
