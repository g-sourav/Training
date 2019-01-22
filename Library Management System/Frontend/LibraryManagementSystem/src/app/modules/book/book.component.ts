import { Component, OnInit } from '@angular/core';
import { ShowBooksService } from 'src/app/modules/book/service/show-books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private showBooksService: ShowBooksService) { }

  ngOnInit() {
    this.showBooks();
  }

  list;
  public showBooks(){
    console.log("Showing Book List during login");
      this.showBooksService.showBooks().subscribe(data=>{this.list=data});
  }
}
