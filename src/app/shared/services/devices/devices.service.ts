import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Device } from './devices.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  // URL
  public urlDevices: string = environment.baseUrl + 'v1/devices/'

  // Data
  public devices: Device[] = []
  public device: Device

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Device> {
    return this.http.post<any>(this.urlDevices, body).pipe(
      tap((res) => {
        console.log('Device: ', res)
      })
    )
  }

  get(): Observable<Device[]> {
    return this.http.get<Device[]>(this.urlDevices).pipe(
      tap((res: Device[]) => {
        console.log('Devices: ', res)
        this.devices = res
      })
    )
  }

  getOne(id: string): Observable<Device> {
   let urlID = this.urlDevices + id + '/'
   return this.http.get<Device>(urlID).pipe(
     tap((res: Device) => {
       console.log('Device: ', res)
       this.device = res
     })
   )
 }

  update(body: Form): Observable<Device> {
    return this.http.patch<Device>(this.urlDevices, body).pipe(
      tap((res) => {
        console.log('Device: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlDevices + id + '/').pipe(
      tap((res) => {
        console.log('Device: ', res)
      })
    )
  }
  
}
