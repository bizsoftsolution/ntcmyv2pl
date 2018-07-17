import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundGalleryComponent } from './playground-gallery.component';

describe('PlaygroundGalleryComponent', () => {
  let component: PlaygroundGalleryComponent;
  let fixture: ComponentFixture<PlaygroundGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
