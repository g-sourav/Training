import { TestBed } from '@angular/core/testing';

import { ShowPageService } from './show-page.service';

describe('ShowPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowPageService = TestBed.get(ShowPageService);
    expect(service).toBeTruthy();
  });
});
