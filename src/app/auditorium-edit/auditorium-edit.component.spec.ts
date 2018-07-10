import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriumEditComponent } from './auditorium-edit.component';

describe('AuditoriumEditComponent', () => {
  let component: AuditoriumEditComponent;
  let fixture: ComponentFixture<AuditoriumEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriumEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
