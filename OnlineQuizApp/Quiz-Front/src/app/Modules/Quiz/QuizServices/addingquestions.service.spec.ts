import { TestBed } from '@angular/core/testing';

import { AddingquestionsService } from './addingquestions.service';

describe('AddingquestionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddingquestionsService = TestBed.get(AddingquestionsService);
    expect(service).toBeTruthy();
  });
});
