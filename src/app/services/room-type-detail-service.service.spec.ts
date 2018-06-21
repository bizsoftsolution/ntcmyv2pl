import { TestBed, inject } from '@angular/core/testing';

import { RoomTypeDetailServiceService } from './room-type-detail-service.service';

describe('RoomTypeDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomTypeDetailServiceService]
    });
  });

  it('should be created', inject([RoomTypeDetailServiceService], (service: RoomTypeDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
