import { Component, OnInit } from '@angular/core';
import { BookBorrowed } from '../../Pojo/BookBorrowed';
import { StoreUserDataService } from '../service/store-user-data.service';
import { ShowAllBooksUserService } from './service/show-all-books-user.service';
import { BorrowBookService } from './service/borrow-book.service';
import { BookDetails } from '../../Pojo/BookDetails';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { SearchBooksService } from './service/search-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-borrow-book',
  templateUrl: './borrow-book.component.html',
  styleUrls: ['./borrow-book.component.css']
})
export class BorrowBookComponent implements OnInit {

  buttonStatus: boolean=false;
  constructor(
    private showBooks: ShowAllBooksUserService,
    private borrowBook: BorrowBookService,
    private userData: StoreUserDataService,
    private findBooks: SearchBooksService,
    private router: Router
  ) { }

  bookBorrowed: BookBorrowed = new BookBorrowed();
  user: BorrowerDetails;
  borrowDate: Date = new Date();
  returnDate: Date = new Date();

  ngOnInit() {
    this.user = this.userData.getUser();
    this.showAllBooks();
  }

  list;
  showAllBooks() {
    this.showBooks.showAllBooks().subscribe(data => {
      this.list = data;
    });
  }

  borrowABook(book: BookDetails) {
    this.buttonStatus=true;
    this.bookBorrowed.borrowerEmail = this.user.borrowerEmail;
    this.bookBorrowed.bookId = book.bookId;
    this.bookBorrowed.bookName = book.bookTitle;

    this.returnDate.setDate(this.borrowDate.getDate() + 7);
    this.bookBorrowed.borrowDate = this.borrowDate;
    this.bookBorrowed.returnDate = this.returnDate;

    this.bookBorrowed.status = true;
    this.bookBorrowed.fineDue = 0;
    alert("Book borrowed!");
    this.borrowBook.borrowBook(this.bookBorrowed);
    this.router.navigate(['/app-book-borrowed']); 
  }

  searchBooks(searchString) {
    console.log(searchString);
    this.findBooks.searchBooks(searchString).subscribe(data => {
      this.list = data;
    });
  }

}
