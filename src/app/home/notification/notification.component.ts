import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Notification} from "../../model/notification";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notifications: Notification[] = [];
  editing = false;

  constructor(public authService: AuthService, public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.getNotifications();
  }

  private getNotifications(): void {
    this.notificationService.getNotifications().subscribe(
      notifications => this.notifications = notifications
    );
  }

  public onEdit(): void {
    this.editing = true;
  }

  public onUpdate(notification: Notification): void{
      this.notificationService.updateNotification(notification.id, notification).subscribe(
        res => console.log(res)
      );
  }

  public onDelete(notificationId: number): void {
    this.notificationService.deleteNotification(notificationId).subscribe(
      res => console.log(res)
    );
  }


}
