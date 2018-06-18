import { TestBed, inject } from '@angular/core/testing';

import { TariffDetailService } from './tariff-detail.service';

describe('TariffDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TariffDetailService]
    });
  });

  it('should be created', inject([TariffDetailService], (service: TariffDetailService) => {
    expect(service).toBeTruthy();
  }));
});
