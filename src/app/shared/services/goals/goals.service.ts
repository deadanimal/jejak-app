import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Goal } from './goals.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  // URL
  public urlGoals: string = environment.baseUrl + 'v1/goals/'

  // Data
  public goals: Goal[] = []
  public goal: Goal

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<Goal> {
    return this.http.post<any>(this.urlGoals, body).pipe(
      tap((res) => {
        console.log('Goal: ', res)
      })
    )
  }

  get(): Observable<Goal[]> {
    return this.http.get<Goal[]>(this.urlGoals).pipe(
      tap((res: Goal[]) => {
        console.log('Goals: ', res)
        this.goals = res
      })
    )
  }

  getOne(id: string): Observable<Goal> {
   let urlID = this.urlGoals + id + '/'
   return this.http.get<Goal>(urlID).pipe(
     tap((res: Goal) => {
       console.log('Goal: ', res)
       this.goal = res
     })
   )
 }

  update(body: Form): Observable<Goal> {
    return this.http.patch<Goal>(this.urlGoals, body).pipe(
      tap((res) => {
        console.log('Goal: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlGoals + id + '/').pipe(
      tap((res) => {
        console.log('Goal: ', res)
      })
    )
  }

}
