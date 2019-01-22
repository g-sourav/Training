import { TestBed } from '@angular/core/testing';

import { QuizResultService } from './quiz-result.service';

describe('QuizResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizResultService = TestBed.get(QuizResultService);
    expect(service).toBeTruthy();
  });
});
