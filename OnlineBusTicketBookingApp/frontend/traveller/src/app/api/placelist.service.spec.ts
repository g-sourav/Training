import { TestBed } from '@angular/core/testing';

import { PlacelistService } from './placelist.service';

describe('PlacelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacelistService = TestBed.get(PlacelistService);
    expect(service).toBeTruthy();
  });
});
