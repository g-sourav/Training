import { TestBed } from '@angular/core/testing';

import { ShowUsersAdminService } from './show-users-admin.service';

describe('ShowUsersAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowUsersAdminService = TestBed.get(ShowUsersAdminService);
    expect(service).toBeTruthy();
  });
});
