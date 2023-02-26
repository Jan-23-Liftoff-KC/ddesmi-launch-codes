import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserRegister } from './user-register';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService{
    private javaServerUrl = environment.devServerUrl;

    constructor( private http: HttpClient) { }

    public getUser(id: number): Observable<User> {
      return this.http.get<User>(`${this.javaServerUrl}/user/${id}`);
    }
    
    public addUser(userReg:UserRegister): Observable<UserRegister> {
        return this.http.post<UserRegister>(`${this.javaServerUrl}/user/register`, userReg);
      }

      public userLogin(user:User): Observable<User> {
        return this.http.post<User>(`${this.javaServerUrl}/user/login`, user);
      }
}
