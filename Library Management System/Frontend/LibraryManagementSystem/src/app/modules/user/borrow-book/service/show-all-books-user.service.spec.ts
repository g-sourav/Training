import { TestBed } from '@angular/core/testing';

import { ShowAllBooksUserService } from './show-all-books-user.service';

describe('ShowAllBooksUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowAllBooksUserService = TestBed.get(ShowAllBooksUserService);
    expect(service).toBeTruthy();
  });
});
