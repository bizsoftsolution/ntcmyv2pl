import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RommTypeDetailComponent } from './romm-type-detail.component';

describe('RommTypeDetailComponent', () => {
  let component: RommTypeDetailComponent;
  let fixture: ComponentFixture<RommTypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RommTypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RommTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
