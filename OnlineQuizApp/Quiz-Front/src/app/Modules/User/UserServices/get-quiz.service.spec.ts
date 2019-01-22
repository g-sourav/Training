import { TestBed } from '@angular/core/testing';

import { GetQuizService } from './get-quiz.service';

describe('GetQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuizService = TestBed.get(GetQuizService);
    expect(service).toBeTruthy();
  });
});
