import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallMasterEditComponent } from './hall-master-edit.component';

describe('HallMasterEditComponent', () => {
  let component: HallMasterEditComponent;
  let fixture: ComponentFixture<HallMasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallMasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
