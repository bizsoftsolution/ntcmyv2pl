import { TestBed, inject } from '@angular/core/testing';

import { RoomTariffDetailService } from './room-tariff-detail.service';

describe('RoomTariffDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomTariffDetailService]
    });
  });

  it('should be created', inject([RoomTariffDetailService], (service: RoomTariffDetailService) => {
    expect(service).toBeTruthy();
  }));
});
