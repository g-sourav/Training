import { TestBed } from '@angular/core/testing';

import { ShowBooksAdminService } from './show-books-admin.service';

describe('ShowBooksAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowBooksAdminService = TestBed.get(ShowBooksAdminService);
    expect(service).toBeTruthy();
  });
});
