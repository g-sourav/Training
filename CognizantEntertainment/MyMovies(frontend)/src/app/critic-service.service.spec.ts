import { TestBed } from '@angular/core/testing';

import { CriticServiceService } from './critic-service.service';

describe('CriticServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CriticServiceService = TestBed.get(CriticServiceService);
    expect(service).toBeTruthy();
  });
});
