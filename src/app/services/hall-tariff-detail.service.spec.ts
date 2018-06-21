import { TestBed, inject } from '@angular/core/testing';

import { HallTariffDetailService } from './hall-tariff-detail.service';

describe('HallTariffDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallTariffDetailService]
    });
  });

  it('should be created', inject([HallTariffDetailService], (service: HallTariffDetailService) => {
    expect(service).toBeTruthy();
  }));
});
