import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://127.0.0.1:8080/user/authenticate';

  constructor(private http: HttpClient) { }

  proceedLogin(UserCred: any): Observable<any>{
    return this.http.post(this.apiurl, UserCred);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
  getToken(): string{
    return localStorage.getItem('token') || '';
  }
  haveAccess(): boolean{
    const loggintoken = localStorage.getItem('token') || '';
    const extractedtoken = loggintoken.split('.')[1];
    const atobdata = atob(extractedtoken);
    const finaldata = JSON.parse(atobdata);

    if (finaldata.role === 'admin'){
      return true;
    } else{
      alert('Du hast keinen Zugriff auf diese Funktionalität');
      return false;
    }
  }
}
