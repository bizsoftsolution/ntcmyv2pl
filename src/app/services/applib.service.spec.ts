import { TestBed, inject } from '@angular/core/testing';

import { ApplibService } from '../services/applib.service';

describe('ApplibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplibService]
    });
  });

  it('should be created', inject([ApplibService], (service: ApplibService) => {
    expect(service).toBeTruthy();
  }));
});
