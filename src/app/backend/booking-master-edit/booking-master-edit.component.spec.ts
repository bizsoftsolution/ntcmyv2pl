import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingMasterEditComponent } from './booking-master-edit.component';

describe('BookingMasterEditComponent', () => {
  let component: BookingMasterEditComponent;
  let fixture: ComponentFixture<BookingMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
