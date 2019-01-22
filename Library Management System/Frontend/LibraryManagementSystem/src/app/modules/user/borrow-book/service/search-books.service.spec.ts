import { TestBed } from '@angular/core/testing';

import { SearchBooksService } from './search-books.service';

describe('SearchBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchBooksService = TestBed.get(SearchBooksService);
    expect(service).toBeTruthy();
  });
});
