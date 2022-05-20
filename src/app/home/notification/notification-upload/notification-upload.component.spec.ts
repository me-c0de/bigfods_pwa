import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationUploadComponent } from './notification-upload.component';

describe('NotificationInputComponent', () => {
  let component: NotificationUploadComponent;
  let fixture: ComponentFixture<NotificationUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
