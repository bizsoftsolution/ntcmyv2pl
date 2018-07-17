import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HallofunityGalleryComponent } from './hallofunity-gallery.component';

describe('HallofunityGalleryComponent', () => {
  let component: HallofunityGalleryComponent;
  let fixture: ComponentFixture<HallofunityGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HallofunityGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HallofunityGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
