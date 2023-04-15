import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  user!: { id: 1234; name: 'Richard'; gender: 'M' };

  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  getUser(): Observable<User> {
let myHeaders=new HttpHeaders({'myHeader':['headervalue','valueheader']})
myHeaders= myHeaders.set('id','1234');
// myHeaders=myHeaders.append('id','0000');
myHeaders=myHeaders.set('id','0000');
    return this.http.get<User>(`${this.apiUrl}/users/5`,{headers:myHeaders});
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
  deleteUser(id: number):Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/users/${id}`);
  }
}
