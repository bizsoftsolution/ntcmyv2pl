import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeteriaGalleryComponent } from './cafeteria-gallery.component';

describe('CafeteriaGalleryComponent', () => {
  let component: CafeteriaGalleryComponent;
  let fixture: ComponentFixture<CafeteriaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeteriaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeteriaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
