import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Notification} from '../../model/notification';
import {Observable} from 'rxjs';
import {path} from '../constants/path';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) {
  }

  public addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(path.NOTIFICATION_ENDPOINT, notification);
  }

  public getNotifications(): Observable<Notification[]>{
    return this.http.get<Notification[]>(path.NOTIFICATION_ENDPOINT);
  }

  public getNotification(notificationId: number): Observable<Notification[]>{
    return this.http.get<Notification[]>(path.NOTIFICATION_ENDPOINT + notificationId);
  }

  public updateNotification(notificationId: number, notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(path.NOTIFICATION_ENDPOINT + notificationId , notification);
  }

  public deleteNotificat(notificationId: number): Observable<boolean> {
    return this.http.delete<boolean>(path.NOTIFICATION_ENDPOINT + notificationId);
  }

}
