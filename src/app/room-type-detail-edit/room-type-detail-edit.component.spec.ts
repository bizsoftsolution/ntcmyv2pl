import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTypeDetailEditComponent } from './room-type-detail-edit.component';

describe('RoomTypeDetailEditComponent', () => {
  let component: RoomTypeDetailEditComponent;
  let fixture: ComponentFixture<RoomTypeDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTypeDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTypeDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
