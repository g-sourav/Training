import { TestBed } from '@angular/core/testing';

import { ShowBooksService } from './show-books.service';

describe('ShowBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowBooksService = TestBed.get(ShowBooksService);
    expect(service).toBeTruthy();
  });
});
