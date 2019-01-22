import { TestBed } from '@angular/core/testing';

import { ReturnBookService } from './return-book.service';

describe('ReturnBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReturnBookService = TestBed.get(ReturnBookService);
    expect(service).toBeTruthy();
  });
});
