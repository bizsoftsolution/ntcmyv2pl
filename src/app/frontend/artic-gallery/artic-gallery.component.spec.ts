import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticGalleryComponent } from './artic-gallery.component';

describe('ArticGalleryComponent', () => {
  let component: ArticGalleryComponent;
  let fixture: ComponentFixture<ArticGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
