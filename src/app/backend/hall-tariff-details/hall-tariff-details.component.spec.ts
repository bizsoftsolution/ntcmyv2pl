import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallTariffDetailsComponent } from './hall-tariff-details.component';

describe('HallTariffDetailsComponent', () => {
  let component: HallTariffDetailsComponent;
  let fixture: ComponentFixture<HallTariffDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallTariffDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallTariffDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
