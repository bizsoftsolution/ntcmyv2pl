import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffTypeEditComponent } from './tariff-type-edit.component';

describe('TariffTypeEditComponent', () => {
  let component: TariffTypeEditComponent;
  let fixture: ComponentFixture<TariffTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
