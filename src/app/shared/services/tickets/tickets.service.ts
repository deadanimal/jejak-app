import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Ticket } from './tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

   // URL
   public urlTickets: string = environment.baseUrl + 'v1/tickets/'

   // Data
   public tickets: Ticket[] = []
   public ticket: Ticket
 
   constructor(
     private http: HttpClient
   ) { }
 
   post(body: Form): Observable<Ticket> {
     return this.http.post<any>(this.urlTickets, body).pipe(
       tap((res) => {
         console.log('Ticket: ', res)
       })
     )
   }
 
   get(): Observable<Ticket[]> {
     return this.http.get<Ticket[]>(this.urlTickets).pipe(
       tap((res: Ticket[]) => {
         console.log('Tickets: ', res)
         this.tickets = res
       })
     )
   }

   getOne(id: string): Observable<Ticket> {
    let urlID = this.urlTickets + id + '/'
    return this.http.get<Ticket>(urlID).pipe(
      tap((res: Ticket) => {
        console.log('Ticket: ', res)
        this.ticket = res
      })
    )
  }
 
   update(body: Form): Observable<Ticket> {
     return this.http.patch<Ticket>(this.urlTickets, body).pipe(
       tap((res) => {
         console.log('Ticket: ', res)
       })
     )
   }
 
   delete(id: string): Observable<any> {
     return this.http.delete<any>(this.urlTickets + id + '/').pipe(
       tap((res) => {
         console.log('Ticket: ', res)
       })
     )
   }

}
