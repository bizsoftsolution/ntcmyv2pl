import { TestBed, inject } from '@angular/core/testing';

import { BookingMasterService } from './booking-master.service';

describe('BookingMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingMasterService]
    });
  });

  it('should be created', inject([BookingMasterService], (service: BookingMasterService) => {
    expect(service).toBeTruthy();
  }));
});
