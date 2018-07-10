import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffDetailEditComponent } from './tariff-detail-edit.component';

describe('TariffDetailEditComponent', () => {
  let component: TariffDetailEditComponent;
  let fixture: ComponentFixture<TariffDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
