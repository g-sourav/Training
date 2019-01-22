import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/Models/card';
import { CardService } from '../AdminServices/card.service';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/Models/Quiz';
import { GlobalQuizDetailsService } from '../../User/UserServices/global-quiz-details.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardlist:card[]=[];
  difflist=[
    {id: "", name: "All"},
    {id: "Easy", name: "Easy"},
    {id: "Moderate", name: "Moderate"},
    {id: "Hard", name: "Hard"}
  ]
  difficulty:string;
  category:String[]=[];
  title:String;
  Category:String;
  p:any;
  public errorMessage: string;
  constructor(private cards:CardService,private router:Router,
    private quizService:GlobalQuizDetailsService) { 
    this.difficulty='';
  }
  refresh(): void {
    window.location.reload();
}
 
  ngOnInit() {
    this.cards.getcards().subscribe(
      (data: any) => {
          this.cardlist=data;
          console.log(data);
          console.log(this.cardlist);
          
          
      },
      
      (error: any)=>{
        this.errorMessage="System error or Contact Adminsitrator";
      }
  );
  this.cards.getcategory().subscribe(
    (data: any) => {
        this.category=data;
       
        
  });
  }
  takeQuiz(quiz:Quiz){
    console.log(quiz);
    this.quizService.quiz=quiz;
this.router.navigate(['../instructions']);
    

  }

}
