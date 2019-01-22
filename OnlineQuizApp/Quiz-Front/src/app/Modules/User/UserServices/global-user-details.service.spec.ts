import { TestBed } from '@angular/core/testing';

import { GlobalUserDetailsService } from './global-user-details.service';

describe('GlobalUserDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalUserDetailsService = TestBed.get(GlobalUserDetailsService);
    expect(service).toBeTruthy();
  });
});
