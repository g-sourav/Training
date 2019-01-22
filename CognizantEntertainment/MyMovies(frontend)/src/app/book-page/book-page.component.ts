import { Component, OnInit } from '@angular/core';
import { ShowPageService } from '../show-page.service';
import { ShowTicket } from '../showTicket';
import { Router } from '@angular/router';
import { BookTicket } from '../bookTicket';
import { BookPageService } from '../book-page.service';
import { Seats } from '../seats';
import { AuthService } from '../auth.service';
import { DataService } from '../data.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  tickets:ShowTicket;
  book:BookTicket;
  count:number=0;
  arrSeats:Seats[];
  bookSeats:Seats[]= new Array<Seats>();
  isDis:boolean;
  constructor(private service:ShowPageService,private router:Router,private bs:BookPageService,
    private auth:AuthService,private data:DataService) { }
  ngOnInit() {
    this.isDis=true;
    this.tickets=this.service.show;
    this.auth.changeMessage('Hello from book');
    this.bs.getSeats(this.tickets.id).subscribe(
      (response:Seats[])=>{
        console.log(response);
        
          this.arrSeats=response;
      }
    );
  }

  // checkSeat(n:Seats){
  //   if(n.isBooked==1)
  //     alert("Already booked");
  // }
  // addSeat(seat:Seats){
  //   if(this.count===3)
  //     alert("Only 3 seats allowed");
  //   else if(seat.isBooked===1)
  //     alert("Already booked");
  //   else{
  //     seat.isChecked=true;
  //     this.count=this.count+1;
  //     this.bookSeats.push(seat);
  //   }
    
  // }
  // removeSeat(seat:Seats){
  //   if(this.count===0)
  //     alert("Please select a seat");
  //   else{
  //     seat.isChecked=false;
  //     this.count=this.count-1;
  //   }
  // }
  legends(){
    this.isDis=!this.isDis;
  }
  booking(seat:Seats){
      seat.isChecked=!seat.isChecked;
      for(let seats of this.arrSeats){
        if(seats.isChecked===true){
          this.count++;
        }
      }
  }
  confirmPage(){
    if(this.count===0)
      swal({type:'warning',
    title:'Please select a seat',
    text:'To reserve....'
    });
    else{
      swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText:'No'
      }).then((result) => {
        if (result.value) {
          this.service.book.user=this.data.user;
          this.service.book.show=this.tickets;
          this.service.book.bookSeats=this.arrSeats;
          console.log(this.service.book);
          this.router.navigate(['confirm']);
        }
      })
   
    }
  }
}