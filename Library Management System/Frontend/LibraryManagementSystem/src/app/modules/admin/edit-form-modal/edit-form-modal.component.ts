import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookDetails } from '../../Pojo/BookDetails';
import { AddBookService } from '../service/add-book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form-modal',
  templateUrl: './edit-form-modal.component.html',
  styleUrls: ['./edit-form-modal.component.css']
})

export class EditFormModalComponent implements OnInit {

  @Input() book: BookDetails;

   constructor(public activeModal: NgbActiveModal, private addBook: AddBookService, private router: Router) { }

  ngOnInit() {
  }

  saveAfterEdit() {
    this.addBook.addBook(this.book);
    this.closeForm();
  }

  closeForm() {
    this.activeModal.close('Edit Successfull!');
    this.router.navigate(['../app-getbooks']);
  }

}
