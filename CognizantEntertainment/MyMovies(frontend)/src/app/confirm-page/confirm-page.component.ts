import { Component, OnInit } from '@angular/core';
import { ShowPageService } from '../show-page.service';
import { ConfirmPageService } from '../confirm-page.service';
import { BookTicket } from '../bookTicket';
import { Seats } from '../seats';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {

  constructor(private showService:ShowPageService,private book:ConfirmPageService,
    private data:DataService,private router:Router) { }    
  tickets:BookTicket;
    arr = new Array<Seats>();
    count:number=0;
  ngOnInit() {
    this.tickets=this.showService.book;
    console.log(this.data.user);
    
    this.tickets.user=this.data.user;
    for(let i of this.tickets.bookSeats){
      if(i.isChecked===true&&i.isBooked===0){
        i.isBooked=1;
        i.isChecked=false;
        this.count++;
        this.arr.push(i);
      }
    }
    // this.tickets.show.price=this.tickets.show.price*this.count;
    this.confirmBook();
  }
  confirmBook(){
    console.log(this.tickets);
    this.book.confirmBook(this.tickets);
    swal({type:'success',
    title:'Tickets',
      text:'Booked successfully'});
  }
  done(){
    this.router.navigate(['dashboard']);
  }

}
