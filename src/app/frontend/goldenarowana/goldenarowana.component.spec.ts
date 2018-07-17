import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenarowanaComponent } from './goldenarowana.component';

describe('GoldenarowanaComponent', () => {
  let component: GoldenarowanaComponent;
  let fixture: ComponentFixture<GoldenarowanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldenarowanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldenarowanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
