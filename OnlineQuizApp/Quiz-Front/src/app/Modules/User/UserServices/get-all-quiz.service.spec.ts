import { TestBed } from '@angular/core/testing';

import { GetAllQuizService } from './get-all-quiz.service';

describe('GetAllQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetAllQuizService = TestBed.get(GetAllQuizService);
    expect(service).toBeTruthy();
  });
});
