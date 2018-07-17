import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcMemberComponent } from './ntc-member.component';

describe('NtcMemberComponent', () => {
  let component: NtcMemberComponent;
  let fixture: ComponentFixture<NtcMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtcMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtcMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
