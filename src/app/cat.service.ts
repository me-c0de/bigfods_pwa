import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cat} from './cat';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsUrl = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.catsUrl + '/cats');
  }

  addCat(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>(this.catsUrl + '/cat', cat, this.httpOptions);
  }
}

