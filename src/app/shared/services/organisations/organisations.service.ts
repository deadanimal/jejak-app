import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Organisation } from './organisations.model';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  // URL
  public urlOrganisations: string = environment.baseUrl + 'v1/organisations/'

  // Data
  public organisations: Organisation[] = []
  public organisation: Organisation

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Organisation> {
    return this.http.post<any>(this.urlOrganisations, body).pipe(
      tap((res) => {
        console.log('Organisation: ', res)
      })
    )
  }

  get(): Observable<Organisation[]> {
    return this.http.get<Organisation[]>(this.urlOrganisations).pipe(
      tap((res: Organisation[]) => {
        console.log('Organisations: ', res)
        this.organisations = res
      })
    )
  }

  getOne(id: string): Observable<Organisation> {
   let urlID = this.urlOrganisations + id + '/'
   return this.http.get<Organisation>(urlID).pipe(
     tap((res: Organisation) => {
       console.log('Organisation: ', res)
       this.organisation = res
     })
   )
 }

  update(body: Form): Observable<Organisation> {
    return this.http.patch<Organisation>(this.urlOrganisations, body).pipe(
      tap((res) => {
        console.log('Organisation: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlOrganisations + id + '/').pipe(
      tap((res) => {
        console.log('Organisation: ', res)
      })
    )
  }

}
