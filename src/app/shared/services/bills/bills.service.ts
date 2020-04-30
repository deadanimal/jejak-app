import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bill } from './bills.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {

  // URL
  public urlBills: string = environment.baseUrl + 'v1/bills/'

  // Data
  public bills: Bill[] = []
  public bill: Bill

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Bill> {
    return this.http.post<any>(this.urlBills, body).pipe(
      tap((res) => {
        console.log('Bill: ', res)
      })
    )
  }

  get(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.urlBills).pipe(
      tap((res: Bill[]) => {
        console.log('Bills: ', res)
        this.bills = res
      })
    )
  }

  getOne(id: string): Observable<Bill> {
   let urlID = this.urlBills + id + '/'
   return this.http.get<Bill>(urlID).pipe(
     tap((res: Bill) => {
       console.log('Bill: ', res)
       this.bill = res
     })
   )
 }

  update(body: Form): Observable<Bill> {
    return this.http.patch<Bill>(this.urlBills, body).pipe(
      tap((res) => {
        console.log('Bill: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlBills + id + '/').pipe(
      tap((res) => {
        console.log('Bill: ', res)
      })
    )
  }
  
}
