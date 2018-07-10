import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallSlotEditComponent } from './hall-slot-edit.component';

describe('HallSlotEditComponent', () => {
  let component: HallSlotEditComponent;
  let fixture: ComponentFixture<HallSlotEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallSlotEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallSlotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
