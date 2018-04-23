import { TestBed, inject } from '@angular/core/testing';

import { VolunteerServiceService } from './volunteer-service.service';

describe('VolunteerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VolunteerServiceService]
    });
  });

  it('should be created', inject([VolunteerServiceService], (service: VolunteerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
