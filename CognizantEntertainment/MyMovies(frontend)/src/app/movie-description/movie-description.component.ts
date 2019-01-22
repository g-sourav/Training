import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from '../admin-data.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css']
})
export class MovieDescriptionComponent implements OnInit {
  title:any;
   imagesrc:any;
   user:User;
   public user1:User[]=[];
   use=new User();
   ch:number;
  constructor(private router:Router,private adminSer:AdminDataService) { 
    this.title=this.adminSer.titleS;
    this.imagesrc=this.adminSer.imageS;
    console.log(this.title);
    console.log(this.imagesrc);
    localStorage.setItem('visible','false');
  }

  ngOnInit() {
  
      console.log('Hii i am in');
      this.adminSer.getEmployees()
                  .subscribe(data=>{this.user=data;
                    this.adminSer.movie=this.user;
                    console.log(this.user);
                  
                  }
                  
                    );
                    
  }

  redirect(){
    this.router.navigate(['shows']);
  }
  
ask(value){
  if(value==='summary')
    this.ch=1;
  else if(value==='reviews')
    this.ch=2;
  else if(value==='critic')
    this.ch=3;
  //this.router.navigate(['summary'])
}

 

}


