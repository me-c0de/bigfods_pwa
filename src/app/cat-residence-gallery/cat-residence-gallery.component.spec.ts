import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatResidenceGalleryComponent } from './cat-residence-gallery.component';

describe('CatResidenceGalleryComponent', () => {
  let component: CatResidenceGalleryComponent;
  let fixture: ComponentFixture<CatResidenceGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatResidenceGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatResidenceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
