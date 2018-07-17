import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtcGalleryComponent } from './ntc-gallery.component';

describe('NtcGalleryComponent', () => {
  let component: NtcGalleryComponent;
  let fixture: ComponentFixture<NtcGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtcGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtcGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
