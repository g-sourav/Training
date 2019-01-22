import { TestBed } from '@angular/core/testing';

import { LoginRegisterService } from './login-register.service';

describe('LoginRegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginRegisterService = TestBed.get(LoginRegisterService);
    expect(service).toBeTruthy();
  });
});
