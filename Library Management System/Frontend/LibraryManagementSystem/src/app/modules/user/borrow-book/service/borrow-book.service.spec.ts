import { TestBed } from '@angular/core/testing';

import { BorrowBookService } from './borrow-book.service';

describe('BorrowBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowBookService = TestBed.get(BorrowBookService);
    expect(service).toBeTruthy();
  });
});
