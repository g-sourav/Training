import { Component, OnInit } from '@angular/core';
import { Critic } from '../critic';
import { CriticServiceService } from '../critic-service.service';

@Component({
  selector: 'app-critic-reviews',
  templateUrl: './critic-reviews.component.html',
  styleUrls: ['./critic-reviews.component.css']
})
export class CriticReviewsComponent implements OnInit {
  title:any;
  user:Critic;
  constructor(private criticService:CriticServiceService) { 
    this.title=this.criticService.critic_titleS;
  }

  ngOnInit() {
    console.log('Hii i am in');
    this.criticService.getEmployees()
                .subscribe(data=>{this.user=data;
                 
                  console.log(this.user);
                
                }
                
                  );

  }

}
