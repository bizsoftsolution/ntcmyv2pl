import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHallEditComponent } from './booking-hall-edit.component';

describe('BookingHallEditComponent', () => {
  let component: BookingHallEditComponent;
  let fixture: ComponentFixture<BookingHallEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingHallEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
