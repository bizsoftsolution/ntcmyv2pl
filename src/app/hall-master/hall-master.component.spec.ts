import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallMasterComponent } from './hall-master.component';

describe('HallMasterComponent', () => {
  let component: HallMasterComponent;
  let fixture: ComponentFixture<HallMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
