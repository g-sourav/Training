import { TestBed } from '@angular/core/testing';

import { QuestionDetailsService } from './question-details.service';

describe('QuestionDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionDetailsService = TestBed.get(QuestionDetailsService);
    expect(service).toBeTruthy();
  });
});
