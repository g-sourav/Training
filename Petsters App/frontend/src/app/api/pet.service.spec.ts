import { TestBed } from '@angular/core/testing';

import { petService } from './pet.service';


describe('petService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: petService = TestBed.get(petService);
    expect(service).toBeTruthy();
  });
});
