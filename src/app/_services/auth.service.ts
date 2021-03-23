import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(manager): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: manager.username,
      email: manager.email,
      firstname: manager.firstname,
      lastname:manager.lastname,
      password: manager.password,
      address: manager.address,
      dob: manager.dob,
      company: manager.company
    }, httpOptions);
  }

}
