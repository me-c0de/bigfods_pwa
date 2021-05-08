import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatProfilePictureComponent } from './cat-profile-picture.component';

describe('CatProfilePictureComponent', () => {
  let component: CatProfilePictureComponent;
  let fixture: ComponentFixture<CatProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatProfilePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
