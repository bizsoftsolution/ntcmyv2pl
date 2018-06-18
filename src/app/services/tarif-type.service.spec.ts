import { TestBed, inject } from '@angular/core/testing';

import { TarifTypeService } from './tarif-type.service';

describe('TarifTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TarifTypeService]
    });
  });

  it('should be created', inject([TarifTypeService], (service: TarifTypeService) => {
    expect(service).toBeTruthy();
  }));
});
