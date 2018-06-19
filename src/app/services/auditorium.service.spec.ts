import { TestBed, inject } from '@angular/core/testing';

import { AuditoriumService } from './auditorium.service';

describe('AuditoriumService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuditoriumService]
    });
  });

  it('should be created', inject([AuditoriumService], (service: AuditoriumService) => {
    expect(service).toBeTruthy();
  }));
});
