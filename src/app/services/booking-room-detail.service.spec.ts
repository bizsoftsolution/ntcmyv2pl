import { TestBed, inject } from '@angular/core/testing';

import { BookingRoomDetailService } from './booking-room-detail.service';

describe('BookingRoomDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingRoomDetailService]
    });
  });

  it('should be created', inject([BookingRoomDetailService], (service: BookingRoomDetailService) => {
    expect(service).toBeTruthy();
  }));
});
