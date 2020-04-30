import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Notification } from './notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // URL
  public urlNotifications: string = environment.baseUrl + 'v1/notifications/'

  // Data
  public notifications: Notification[] = []
  public notification: Notification

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Notification> {
    return this.http.post<any>(this.urlNotifications, body).pipe(
      tap((res) => {
        console.log('Notification: ', res)
      })
    )
  }

  get(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.urlNotifications).pipe(
      tap((res: Notification[]) => {
        console.log('Notifications: ', res)
        this.notifications = res
      })
    )
  }

  getOne(id: string): Observable<Notification> {
   let urlID = this.urlNotifications + id + '/'
   return this.http.get<Notification>(urlID).pipe(
     tap((res: Notification) => {
       console.log('Notification: ', res)
       this.notification = res
     })
   )
 }

  update(body: Form): Observable<Notification> {
    return this.http.patch<Notification>(this.urlNotifications, body).pipe(
      tap((res) => {
        console.log('Notification: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlNotifications + id + '/').pipe(
      tap((res) => {
        console.log('Notification: ', res)
      })
    )
  }

}
