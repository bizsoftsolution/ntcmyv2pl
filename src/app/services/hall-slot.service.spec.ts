import { TestBed, inject } from '@angular/core/testing';

import { HallSlotService } from './hall-slot.service';

describe('HallSlotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallSlotService]
    });
  });

  it('should be created', inject([HallSlotService], (service: HallSlotService) => {
    expect(service).toBeTruthy();
  }));
});
