import { TestBed } from '@angular/core/testing';

import { GlobalQuizDetailsService } from './global-quiz-details.service';

describe('GlobalQuizDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalQuizDetailsService = TestBed.get(GlobalQuizDetailsService);
    expect(service).toBeTruthy();
  });
});
