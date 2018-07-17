import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlanticGalleryComponent } from './atlantic-gallery.component';

describe('AtlanticGalleryComponent', () => {
  let component: AtlanticGalleryComponent;
  let fixture: ComponentFixture<AtlanticGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlanticGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlanticGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
