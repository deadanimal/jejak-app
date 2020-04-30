import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // URL
  public urlUsers: string = environment.baseUrl + 'v1/users/'

  // Data
  public users: User[] = []
  public user: User

  constructor(
    private http: HttpClient
  ) { }

  post(body: Form): Observable<User> {
    return this.http.post<any>(this.urlUsers, body).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  get(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers).pipe(
      tap((res: User[]) => {
        console.log('Users: ', res)
        this.users = res
      })
    )
  }

  getOne(id: string): Observable<User> {
    let urlID = this.urlUsers + id + '/'
    return this.http.get<User>(urlID).pipe(
      tap((res: User) => {
        console.log('User: ', res)
        this.user = res
      })
    )
  }

  update(body: Form): Observable<User> {
    return this.http.patch<User>(this.urlUsers, body).pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(this.urlUsers + id + '/').pipe(
      tap((res) => {
        console.log('User: ', res)
      })
    )
  }

}
