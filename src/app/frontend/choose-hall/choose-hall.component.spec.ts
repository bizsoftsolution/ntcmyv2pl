import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseHallComponent } from './choose-hall.component';

describe('ChooseHallComponent', () => {
  let component: ChooseHallComponent;
  let fixture: ComponentFixture<ChooseHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
