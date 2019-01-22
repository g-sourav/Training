import { TestBed } from '@angular/core/testing';

import { StoreUserDataService } from './store-user-data.service';

describe('StoreUserDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreUserDataService = TestBed.get(StoreUserDataService);
    expect(service).toBeTruthy();
  });
});
