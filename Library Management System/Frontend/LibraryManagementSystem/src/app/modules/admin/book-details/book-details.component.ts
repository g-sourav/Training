import { Component, OnInit } from '@angular/core';
import { BookDetails } from '../../Pojo/BookDetails';
import { Router } from '@angular/router';
import { ShowBooksAdminService } from '../service/show-books-admin.service';
import { DeleteBookService } from '../service/delete-book.service';
import { AddBookService } from '../service/add-book.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditFormModalComponent } from '../edit-form-modal/edit-form-modal.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: BookDetails = new BookDetails();
  constructor(
    private router: Router,
    private showAllBooks: ShowBooksAdminService,
    private deleteBook: DeleteBookService,
    private modalService: NgbModal
  ) { }


  ngOnInit() {
    this.showBooks();
  }

  list: BookDetails;
  public showBooks() {
    console.log("getting books list for admin..");
    this.showAllBooks.showAllBooks().subscribe(data => {
      this.list = data;
    });
  }

  public deletebook(book: BookDetails) {
    console.log("deleting book");
    alert('Book Deleted Successfully!');
    this.deleteBook.deleteBook(book);
    this.showBooks();
    this.router.navigate(['../app-getbooks']);
  }

  editBook(theBook: BookDetails) {
    this.book = theBook;
    const modalRef = this.modalService.open(EditFormModalComponent);
    modalRef.componentInstance.book=this.book;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });

  }

}
