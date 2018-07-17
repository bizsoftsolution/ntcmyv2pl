import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcMemberEditComponent } from './ntc-member-edit.component';

describe('NtcMemberEditComponent', () => {
  let component: NtcMemberEditComponent;
  let fixture: ComponentFixture<NtcMemberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtcMemberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtcMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
