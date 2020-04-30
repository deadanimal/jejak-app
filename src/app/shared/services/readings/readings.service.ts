import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Reading } from './readings.model';

@Injectable({
  providedIn: 'root'
})
export class ReadingsService {

  // URL
  public urlReadings: string = environment.baseUrl + 'v1/readings/'

  // Data
  public readings: Reading[] = []
  public reading: Reading

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Reading> {
    return this.http.post<any>(this.urlReadings, body).pipe(
      tap((res) => {
        console.log('Reading: ', res)
      })
    )
  }

  get(): Observable<Reading[]> {
    return this.http.get<Reading[]>(this.urlReadings).pipe(
      tap((res: Reading[]) => {
        console.log('Readings: ', res)
        this.readings = res
      })
    )
  }

  getOne(id: string): Observable<Reading> {
   let urlID = this.urlReadings + id + '/'
   return this.http.get<Reading>(urlID).pipe(
     tap((res: Reading) => {
       console.log('Reading: ', res)
       this.reading = res
     })
   )
 }

  update(body: Form): Observable<Reading> {
    return this.http.patch<Reading>(this.urlReadings, body).pipe(
      tap((res) => {
        console.log('Reading: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlReadings + id + '/').pipe(
      tap((res) => {
        console.log('Reading: ', res)
      })
    )
  }

}
