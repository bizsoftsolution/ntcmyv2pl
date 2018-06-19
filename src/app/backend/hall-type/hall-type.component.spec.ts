import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallTypeComponent } from './hall-type.component';

describe('HallTypeComponent', () => {
  let component: HallTypeComponent;
  let fixture: ComponentFixture<HallTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
