import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRoomEditComponent } from './booking-room-edit.component';

describe('BookingRoomEditComponent', () => {
  let component: BookingRoomEditComponent;
  let fixture: ComponentFixture<BookingRoomEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRoomEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRoomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
