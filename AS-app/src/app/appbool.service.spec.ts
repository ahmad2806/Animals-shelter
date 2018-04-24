import { TestBed, inject } from '@angular/core/testing';

import { AppboolService } from './appbool.service';

describe('AppboolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppboolService]
    });
  });

  it('should be created', inject([AppboolService], (service: AppboolService) => {
    expect(service).toBeTruthy();
  }));
});
