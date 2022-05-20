import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../service/notification/notification.service';
import {Notification} from '../../../model/notification';

@Component({
  selector: 'app-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.scss']
})
export class NotificationEditComponent implements OnInit {

  @Input() notification: Notification;

  edit = new FormGroup({
    subject: new FormControl(''),
    message: new FormControl(''),
  });


  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public onEdit(notificationId: number): void{

    const notification: Notification = {
      subject: this.edit.value.subject,
      message: this.edit.value.message
    };

    this.notificationService.updateNotification(notificationId, notification).subscribe(res =>
      console.log(res));
  }

}
