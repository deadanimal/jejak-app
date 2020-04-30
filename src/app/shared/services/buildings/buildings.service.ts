import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Building } from './buildings.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  // URL
  public urlBuildings: string = environment.baseUrl + 'v1/buildings/'

  // Data
  public buildings: Building[] = []
  public building: Building

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Building> {
    return this.http.post<any>(this.urlBuildings, body).pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

  get(): Observable<Building[]> {
    return this.http.get<Building[]>(this.urlBuildings).pipe(
      tap((res: Building[]) => {
        console.log('Buildings: ', res)
        this.buildings = res
      })
    )
  }

  getOne(id: string): Observable<Building> {
   let urlID = this.urlBuildings + id + '/'
   return this.http.get<Building>(urlID).pipe(
     tap((res: Building) => {
       console.log('Building: ', res)
       this.building = res
     })
   )
 }

  update(body: Form): Observable<Building> {
    return this.http.patch<Building>(this.urlBuildings, body).pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlBuildings + id + '/').pipe(
      tap((res) => {
        console.log('Building: ', res)
      })
    )
  }

}
