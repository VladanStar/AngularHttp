import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }
getUsers() :Observable<User[]>{
return this.http.get<User[]>(`${this.apiUrl}`)

}
getUser() :Observable<User>{
  return this.http.get<User>(`${this.apiUrl}/1`)

  }
}
