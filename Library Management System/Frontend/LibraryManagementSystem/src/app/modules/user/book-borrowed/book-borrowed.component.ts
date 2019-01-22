import { Component, OnInit } from '@angular/core';
import { StoreUserDataService } from '../service/store-user-data.service';
import { ShowBooksService } from '../../user/book-borrowed/service/show-books.service';
import { BorrowerDetails } from '../../Pojo/BorrowerDetails';
import { BookDetails } from '../../Pojo/BookDetails';
import { ReturnBookService } from './service/return-book.service';
import { BookBorrowed } from '../../Pojo/BookBorrowed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-borrowed',
  templateUrl: './book-borrowed.component.html',
  styleUrls: ['./book-borrowed.component.css']
})
export class BookBorrowedComponent implements OnInit {

  private user: BorrowerDetails;
  dateDiff: number = 0;
  borrowDate: Date = new Date();
  returnDate: Date = new Date();

  constructor(private showBooksBorowed: ShowBooksService, private userData: StoreUserDataService, private returnBook:ReturnBookService, private router: Router) {
   }

  ngOnInit() {
    this.user=this.userData.getUser();
    this.showBorrowedBooks();
  }


  list;
  showBorrowedBooks() {
    this.showBooksBorowed.showBorrowedBooks(this.user).subscribe(data=>{
      this.list=data;
    })
  }

  checkStatus(bookBorrowed: BookBorrowed) {
    return !bookBorrowed.status
  }

  bookNew: BookDetails;
  getBookName(bookBorrowed: BookBorrowed) {
    this.showBooksBorowed.showBookName(bookBorrowed).subscribe( (responseData: BookDetails) =>{
      this.bookNew=responseData;
      console.log(this.bookNew);
    });
    return this.bookNew.bookTitle;
    
  }

  returnABook(bookBorrowed: BookBorrowed) {
      this.borrowDate=bookBorrowed.borrowDate;
      if(this.borrowDate!=this.returnDate)
        this.dateDiff=new Date(this.returnDate).getTime()- new Date(this.borrowDate).getTime();
      this.dateDiff=this.dateDiff/(1000*60*60*24);
      this.dateDiff=this.dateDiff>7?this.dateDiff-7:0;
      
      console.log(this.dateDiff);

      bookBorrowed.fineDue=this.dateDiff*10;
      bookBorrowed.status=false;
      alert('Book Returned!');
      this.returnBook.returnBook(bookBorrowed);
      this.showBorrowedBooks();
      this.router.navigate(['/app-book-borrowed']);
  }

}
