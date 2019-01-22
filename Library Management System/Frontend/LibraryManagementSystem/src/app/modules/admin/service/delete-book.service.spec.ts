import { TestBed } from '@angular/core/testing';

import { DeleteBookService } from './delete-book.service';

describe('DeleteBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteBookService = TestBed.get(DeleteBookService);
    expect(service).toBeTruthy();
  });
});
