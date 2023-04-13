import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
getUsers() :Observable<User[]>{
return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')

}
getUser() :Observable<User>{
  return this.http.get<User>('https://jsonplaceholder.typicode.com/user/1')

  }
}
