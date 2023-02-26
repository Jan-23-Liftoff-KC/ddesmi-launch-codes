import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService{
    private javaServerUrl = environment.devServerUrl;

    constructor( private http: HttpClient) { }
    
    public addUser(user:User): Observable<User> {
        return this.http.post<User>(`${this.javaServerUrl}/register`, user);
      }
}
