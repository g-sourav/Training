import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBorrowedComponent } from './book-borrowed.component';

describe('BookBorrowedComponent', () => {
  let component: BookBorrowedComponent;
  let fixture: ComponentFixture<BookBorrowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBorrowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBorrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
