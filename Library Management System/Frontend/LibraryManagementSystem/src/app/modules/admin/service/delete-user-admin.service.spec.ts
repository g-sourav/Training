import { TestBed } from '@angular/core/testing';

import { DeleteUserAdminService } from './delete-user-admin.service';

describe('DeleteUserAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteUserAdminService = TestBed.get(DeleteUserAdminService);
    expect(service).toBeTruthy();
  });
});
