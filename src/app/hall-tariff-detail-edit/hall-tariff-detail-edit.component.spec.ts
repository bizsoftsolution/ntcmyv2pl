import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallTariffDetailEditComponent } from './hall-tariff-detail-edit.component';

describe('HallTariffDetailEditComponent', () => {
  let component: HallTariffDetailEditComponent;
  let fixture: ComponentFixture<HallTariffDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallTariffDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallTariffDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
