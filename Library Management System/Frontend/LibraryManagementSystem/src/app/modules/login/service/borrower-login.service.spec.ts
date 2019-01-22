import { TestBed } from '@angular/core/testing';

import { BorrowerLoginService } from './borrower-login.service';

describe('BorrowerLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowerLoginService = TestBed.get(BorrowerLoginService);
    expect(service).toBeTruthy();
  });
});
