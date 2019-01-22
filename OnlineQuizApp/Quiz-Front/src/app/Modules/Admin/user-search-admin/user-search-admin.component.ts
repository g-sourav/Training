import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { Observable } from 'rxjs';

import { switchMap, debounceTime, distinctUntilChanged, tap, filter} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { UserSearchAdminService } from '../AdminServices/user-search-admin.service';
import { User } from 'src/app/Models/User';

@Component({
  selector: 'app-user-search-admin',
  templateUrl: './user-search-admin.component.html',
  styleUrls: ['./user-search-admin.component.css']
})
export class UserSearchAdminComponent implements OnInit {

  users:Observable<any[]>;
  userName = new FormControl();
  userLoading:boolean=false;
 
 search:string='';
 name1:string="male";
 visible:boolean=true;
 
 
 cardsShow:boolean=false;
 
 userslist:User[];
   constructor(private userSearchAdminservice:UserSearchAdminService) {
    
    }
 
   ngOnInit() {
     
 this.users= this.userName.valueChanges.pipe(
   tap(()=>this.visible=true),
   debounceTime(50),
   distinctUntilChanged(),
   filter(title=>title.length>0),
   tap(() => this.userLoading = true),
   switchMap(title => this.userSearchAdminservice.getSearchUser(title).pipe(
   tap(() => this.userLoading = false)))); 
    
   }
   setValue(str){
     this.search=str;
     console.log(str);
 
     this.visible=false;
   }
   getUserList(){
     console.log("hi");
     console.log(this.search);
     this.userSearchAdminservice.getUserList(this.search).subscribe(response=>{
           
       this.userslist=response;
      //  for(let a of this.userslist)
      //  console.log(a.email);
      //  console.log(a.)
       this.cardsShow=true;
     
     })}
     somethingChanged(){
       console.log("something changed");
       this.cardsShow=false;
     }
     deactivateUser(email:string){
       console.log("deactive"+email);
       const swalWithBootstrapButtons = Swal.mixin({
         confirmButtonClass: 'btn btn-success',
         cancelButtonClass: 'btn btn-danger',
         buttonsStyling: false,
       })
       
       swalWithBootstrapButtons({
         title: 'Are you sure?',
         text: "You want to deactivate the User",
         type: 'warning',
         showCancelButton: true,
         confirmButtonText: 'Yes, deactive!',
         cancelButtonText: 'No, cancel!',
         reverseButtons: true
       }).then((result) => {
         if (result.value) {
           this.userSearchAdminservice.deactivateUser(email).subscribe(response=>{
           
            this.userSearchAdminservice.getUserList(this.search).subscribe(response=>{
           
              this.userslist=response;
            this.cardsShow=true;
     
          })})
           swalWithBootstrapButtons(
             'Deactivated!',
             'The User is deactivated.',
             'success'
           )
         } else if (
           // Read more about handling dismissals
           result.dismiss === Swal.DismissReason.cancel
         ) {
           swalWithBootstrapButtons(
             'Cancelled',
             'The User is not deactivated :)',
             'error'
           )
         }
       })
       
     }
   
   }
 
   
 
