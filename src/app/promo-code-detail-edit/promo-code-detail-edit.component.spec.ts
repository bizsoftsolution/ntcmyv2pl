import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoCodeDetailEditComponent } from './promo-code-detail-edit.component';

describe('PromoCodeDetailEditComponent', () => {
  let component: PromoCodeDetailEditComponent;
  let fixture: ComponentFixture<PromoCodeDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoCodeDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoCodeDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
