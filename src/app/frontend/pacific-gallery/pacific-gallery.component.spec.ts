import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificGalleryComponent } from './pacific-gallery.component';

describe('PacificGalleryComponent', () => {
  let component: PacificGalleryComponent;
  let fixture: ComponentFixture<PacificGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacificGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacificGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
