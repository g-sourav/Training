import { Component, OnInit } from '@angular/core';
import { GetAllQuizService } from '../UserServices/get-all-quiz.service';
import { Quiz } from 'src/app/Models/Quiz';

@Component({
  selector: 'app-quiz-cards',
  templateUrl: './quiz-cards.component.html',
  styleUrls: ['./quiz-cards.component.css']
})
export class QuizCardsComponent implements OnInit {

  cardlist: Quiz[];
  title:String;
  Category:String;
  p:any;
  difficulty: string;
  category: String[] = [];

  public errorMessage: string;
  constructor(private cards: GetAllQuizService) {
    this.difficulty = '';
  }
  refresh(): void {
    window.location.reload();
  }

  ngOnInit() {
    this.cards.getAllQuizDetails().subscribe(
      (data: any) => {
        this.cardlist = data;
        console.log(data);
        console.log(this.cardlist);
      },
      (error: any) => {
        this.errorMessage = "System error or Contact Adminsitrator";
      }
    );
    this.cards.getcategory().subscribe(
      (data: any) => {
        this.category = data;
      });
  }

}
