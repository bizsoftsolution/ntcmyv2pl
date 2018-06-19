import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallSlotComponent } from './hall-slot.component';

describe('HallSlotComponent', () => {
  let component: HallSlotComponent;
  let fixture: ComponentFixture<HallSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
