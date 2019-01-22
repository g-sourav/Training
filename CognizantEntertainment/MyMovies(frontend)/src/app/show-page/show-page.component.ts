import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ShowTicket } from '../showTicket';
import { ShowPageService } from '../show-page.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminDataService } from '../admin-data.service';
import { User } from '../shared/models/user.model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {
  movie= new User();
  dt:string;
  arr:ShowTicket[];
  tickets:ShowTicket;
  constructor(private dp : DatePipe,private service:ShowPageService,
    private route:Router,private auth:AuthService,private admin:AdminDataService) { 
    }
  ngOnInit() {
    this.movie=this.admin.movie;
    console.log(this.movie);
    
    this.dt=this.dp.transform(new Date(),'dd-MM-yyyy');
    this.getDetails(this.dt,this.movie.id);
  }
  getDetails(dt,id){
    // this.newMessage();
    this.service.getDetails(dt,id).subscribe(
      response=>{
        this.arr=response;
        console.log(this.arr);
        
      }
    );
  }
  showTicket(show){
    if(show.availSeats<1)
      swal({type:'warning',
        title:'Ohhh....',
        text:'Show is full'});
    else{
    this.tickets=show;
    this.service.show=this.tickets;
    this.route.navigate(['bookTickets']);
    }  
  }
  newMessage() {
    this.auth.changeMessage("Hello from Show")
  }
}
