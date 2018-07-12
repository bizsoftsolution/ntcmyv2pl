import { TestBed, inject } from '@angular/core/testing';

import { BookingHallDetailService } from './booking-hall-detail.service';

describe('BookingHallDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingHallDetailService]
    });
  });

  it('should be created', inject([BookingHallDetailService], (service: BookingHallDetailService) => {
    expect(service).toBeTruthy();
  }));
});
