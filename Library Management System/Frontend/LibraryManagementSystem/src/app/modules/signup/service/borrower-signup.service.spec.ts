import { TestBed } from '@angular/core/testing';

import { BorrowerSignupService } from './borrower-signup.service';

describe('BorrowerSignupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BorrowerSignupService = TestBed.get(BorrowerSignupService);
    expect(service).toBeTruthy();
  });
});
