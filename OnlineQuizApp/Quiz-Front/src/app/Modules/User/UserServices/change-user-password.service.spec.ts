import { TestBed } from '@angular/core/testing';

import { ChangeUserPasswordService } from './change-user-password.service';

describe('ChangeUserPasswordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeUserPasswordService = TestBed.get(ChangeUserPasswordService);
    expect(service).toBeTruthy();
  });
});
