import { TestBed, inject } from '@angular/core/testing';

import { HallMasterService } from './hall-master.service';

describe('HallMasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallMasterService]
    });
  });

  it('should be created', inject([HallMasterService], (service: HallMasterService) => {
    expect(service).toBeTruthy();
  }));
});
