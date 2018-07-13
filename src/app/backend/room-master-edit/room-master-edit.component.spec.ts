import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMasterEditComponent } from './room-master-edit.component';

describe('RoomMasterEditComponent', () => {
  let component: RoomMasterEditComponent;
  let fixture: ComponentFixture<RoomMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
