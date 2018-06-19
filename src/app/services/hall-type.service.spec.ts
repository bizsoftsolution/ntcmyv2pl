import { TestBed, inject } from '@angular/core/testing';

import { HallTypeService } from './hall-type.service';

describe('HallTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallTypeService]
    });
  });

  it('should be created', inject([HallTypeService], (service: HallTypeService) => {
    expect(service).toBeTruthy();
  }));
});
