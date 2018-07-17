import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingGalleryComponent } from './parking-gallery.component';

describe('ParkingGalleryComponent', () => {
  let component: ParkingGalleryComponent;
  let fixture: ComponentFixture<ParkingGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
