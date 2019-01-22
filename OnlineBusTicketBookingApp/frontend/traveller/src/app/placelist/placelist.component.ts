import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-placelist',
  templateUrl: './placelist.component.html',
  styleUrls: ['./placelist.component.css']
})
export class PlacelistComponent implements OnInit {
   mailId:String  
   Date:String
   fare:number=67
   @ViewChild('message') message: ElementRef;

  constructor(private route:ActivatedRoute, private router:Router) {
       this.mailId= this.route.snapshot.paramMap.get('mailId');
            
   }
  ngOnInit() {
  }
  busList(){

    if( this.Date==="12/dd/2018" || this.fare===67){

      this.message.nativeElement.innerHTML="Please select place and Date";
      console.log(this.Date);
      console.log(this.mailId);


    }
    else{
    this.router.navigate(['/BusList',this.mailId,this.Date,this.fare]);
      
     console.log(this.Date);
     console.log(this.fare);
    }
  }

}
