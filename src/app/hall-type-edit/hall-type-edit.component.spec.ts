import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallTypeEditComponent } from './hall-type-edit.component';

describe('HallTypeEditComponent', () => {
  let component: HallTypeEditComponent;
  let fixture: ComponentFixture<HallTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
