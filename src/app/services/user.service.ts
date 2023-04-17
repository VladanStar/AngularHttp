import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  [x: string]: any;
  private apiUrl = environment.apiUrl;
  user!: { id: 1234; name: 'Richard'; gender: 'M' };
  readonly myParams = ['test1', 'test2'];

  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  getUser(): Observable<User> {
    let myHeaders = new HttpHeaders({
      myHeader: ['headervalue', 'valueheader'],
    });
    // myHeaders= myHeaders.set('id','1234');
    // // myHeaders=myHeaders.append('id','0000');
    // myHeaders=myHeaders.set('id','0000');
    // let myParams=new HttpParams().set('page','5').set('sort','true');
    // myParams= myParams.append('name','junior');
    // myParams= myParams.append('name','john');
    // const theParams={['testList']:this['moreParams']}
    return this.http.get<User>(`${this.apiUrl}/users/5`);
  }
  createUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
  patchUser(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
  uploadfiles(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(
      `http://localhost:9000/file/upload`,
      formData,
      { observe: 'events', reportProgress: true }
    );
  }
}
