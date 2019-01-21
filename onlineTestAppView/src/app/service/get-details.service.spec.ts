import { TestBed } from '@angular/core/testing';

import { GetDetailsService } from './get-details.service';

describe('GetDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetDetailsService = TestBed.get(GetDetailsService);
    expect(service).toBeTruthy();
  });
});
