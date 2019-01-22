import { TestBed } from '@angular/core/testing';

import { CreateQuizService } from './create-quiz.service';

describe('CreateQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateQuizService = TestBed.get(CreateQuizService);
    expect(service).toBeTruthy();
  });
});
