import { TestBed } from '@angular/core/testing';

import { DeactivateUserAccountService } from './deactivate-user-account.service';

describe('DeactivateUserAccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeactivateUserAccountService = TestBed.get(DeactivateUserAccountService);
    expect(service).toBeTruthy();
  });
});
