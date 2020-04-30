import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Aimodel } from './aimodels.model';

@Injectable({
  providedIn: 'root'
})
export class AimodelsService {

  // URL
  public urlAimodels: string = environment.baseUrl + 'v1/aimodels/'

  // Data
  public aimodels: Aimodel[] = []
  public aimodel: Aimodel

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Aimodel> {
    return this.http.post<any>(this.urlAimodels, body).pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

  get(): Observable<Aimodel[]> {
    return this.http.get<Aimodel[]>(this.urlAimodels).pipe(
      tap((res: Aimodel[]) => {
        console.log('Aimodels: ', res)
        this.aimodels = res
      })
    )
  }

  getOne(id: string): Observable<Aimodel> {
   let urlID = this.urlAimodels + id + '/'
   return this.http.get<Aimodel>(urlID).pipe(
     tap((res: Aimodel) => {
       console.log('Aimodel: ', res)
       this.aimodel = res
     })
   )
 }

  update(body: Form): Observable<Aimodel> {
    return this.http.patch<Aimodel>(this.urlAimodels, body).pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlAimodels + id + '/').pipe(
      tap((res) => {
        console.log('Aimodel: ', res)
      })
    )
  }

}
