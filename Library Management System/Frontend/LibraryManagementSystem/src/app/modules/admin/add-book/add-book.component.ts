import { Component, OnInit } from '@angular/core';
import { AddBookService } from '../service/add-book.service';
import { BookDetails } from '../../Pojo/BookDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private addBookS:AddBookService, private router: Router) { }

  ngOnInit() {
  }

  addBook(book:BookDetails) {
    console.log("in addBook");
    alert('Book Added Sucessfully!');
    this.addBookS.addBook(book);
    this.router.navigate(['../app-getbooks']);
  }

}
