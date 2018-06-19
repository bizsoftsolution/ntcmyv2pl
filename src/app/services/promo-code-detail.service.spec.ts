import { TestBed, inject } from '@angular/core/testing';

import { PromoCodeDetailService } from './promo-code-detail.service';

describe('PromoCodeDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PromoCodeDetailService]
    });
  });

  it('should be created', inject([PromoCodeDetailService], (service: PromoCodeDetailService) => {
    expect(service).toBeTruthy();
  }));
});
