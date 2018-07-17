import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluearowanaGalleryComponent } from './bluearowana-gallery.component';

describe('BluearowanaGalleryComponent', () => {
  let component: BluearowanaGalleryComponent;
  let fixture: ComponentFixture<BluearowanaGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluearowanaGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluearowanaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
