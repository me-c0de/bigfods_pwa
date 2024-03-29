import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://127.0.0.1:8080/api/';

  constructor(private http: HttpClient) { }

  registerUser(User: any): Observable<any>{
    return this.http.post(this.apiurl + 'registration', User);
  }

  proceedLogin(UserCred: any): Observable<string>{
     return this.http.post(this.apiurl + 'login', UserCred, {responseType: 'text'});
  }

  isLoggedIn(): boolean {
      return localStorage.getItem('token') != null;
  }

  logout(): void{
    localStorage.clear();
  }

  getToken(): string{
    return localStorage.getItem('token') || '';
  }
}
