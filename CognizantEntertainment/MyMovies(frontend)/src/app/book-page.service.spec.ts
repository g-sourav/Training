import { TestBed } from '@angular/core/testing';

import { BookPageService } from './book-page.service';

describe('BookPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookPageService = TestBed.get(BookPageService);
    expect(service).toBeTruthy();
  });
});
