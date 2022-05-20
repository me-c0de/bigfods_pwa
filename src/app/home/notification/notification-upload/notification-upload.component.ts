import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../../service/notification/notification.service';
import {Notification} from '../../../model/notification';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-notification-input',
  templateUrl: './notification-upload.component.html',
  styleUrls: ['./notification-upload.component.scss']
})
export class NotificationUploadComponent implements OnInit {

  upload = new FormGroup({
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });


  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public onUpload(): void{

    const notification: Notification = {
      subject: this.upload.value.subject,
      message: this.upload.value.message
    };

    this.notificationService.addNotification(notification).subscribe(res =>
    console.log(res));
  }

}
