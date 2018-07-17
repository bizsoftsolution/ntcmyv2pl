import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidarityGalleryComponent } from './solidarity-gallery.component';

describe('SolidarityGalleryComponent', () => {
  let component: SolidarityGalleryComponent;
  let fixture: ComponentFixture<SolidarityGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidarityGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidarityGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
