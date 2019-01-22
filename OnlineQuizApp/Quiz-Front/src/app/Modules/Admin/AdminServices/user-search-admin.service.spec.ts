import { TestBed } from '@angular/core/testing';

import { UserSearchAdminService } from './user-search-admin.service';

describe('UserSearchAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserSearchAdminService = TestBed.get(UserSearchAdminService);
    expect(service).toBeTruthy();
  });
});
