import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../api/booking.service';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
  router:Router;
  BusNumber:number=1;
  mailId: any;
  faree:any
  fare: number;
  Date: any;
fare1:number;fare2:number;fare3:number;
  constructor(private route:ActivatedRoute,private r:Router) {
    this.router=this.r;
    this.mailId= this.route.snapshot.paramMap.get('mailId');
    this.Date= this.route.snapshot.paramMap.get('Date');
    this.faree= this.route.snapshot.paramMap.get('fare');
     this.fare=+this.faree
     this.fare1=this.fare+100;
     this.fare2=this.fare+75;
     this.fare3=this.fare+50;


   }
  ngOnInit() {
    }
   
  
    Bus1(){

    
      this.router.navigate(['Seats',this.mailId,this.Date,this.fare+100,this.BusNumber]);

     }
   Bus2(){

    this.router.navigate(['Seats',this.mailId,this.Date,this.fare+75,this.BusNumber+1]);
   }
   Bus3(){

    this.router.navigate(['Seats',this.mailId,this.Date,this.fare+50,this.BusNumber+2]);
   }
   Bus4(){

    this.router.navigate(['Seats',this.mailId,this.Date,this.fare,this.BusNumber+3]);
   }

}
