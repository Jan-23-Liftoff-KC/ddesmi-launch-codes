import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserRegister } from './user-register';

@Injectable({
  providedIn: 'root'
})

export class UserService{
    private javaServerUrl = environment.devServerUrl;

    constructor( private http: HttpClient) { }
    
    public addUser(userReg:UserRegister): Observable<UserRegister> {
        return this.http.post<UserRegister>(`${this.javaServerUrl}/register`, userReg);
      }
}
