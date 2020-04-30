import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Appliance } from './appliances.model';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {

  // URL
  public urlAppliances: string = environment.baseUrl + 'v1/appliances/'

  // Data
  public appliances: Appliance[] = []
  public appliance: Appliance

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Appliance> {
    return this.http.post<any>(this.urlAppliances, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  get(): Observable<Appliance[]> {
    return this.http.get<Appliance[]>(this.urlAppliances).pipe(
      tap((res: Appliance[]) => {
        console.log('Appliances: ', res)
        this.appliances = res
      })
    )
  }

  getOne(id: string): Observable<Appliance> {
   let urlID = this.urlAppliances + id + '/'
   return this.http.get<Appliance>(urlID).pipe(
     tap((res: Appliance) => {
       console.log('Appliance: ', res)
       this.appliance = res
     })
   )
 }

  update(body: Form): Observable<Appliance> {
    return this.http.patch<Appliance>(this.urlAppliances, body).pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlAppliances + id + '/').pipe(
      tap((res) => {
        console.log('Appliance: ', res)
      })
    )
  }

}
