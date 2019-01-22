import { TestBed } from '@angular/core/testing';

import { ConfirmPageService } from './confirm-page.service';

describe('ConfirmPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmPageService = TestBed.get(ConfirmPageService);
    expect(service).toBeTruthy();
  });
});
