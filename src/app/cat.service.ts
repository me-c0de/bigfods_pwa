import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cat} from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsUrl = 'http://127.0.0.1:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.catsUrl + '/cats');
  }

  deleteCat(id): Observable<Cat[]>{
    return this.http.delete<Cat[]>(this.catsUrl + '/cats/' + id);
  }

  addCat(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>(this.catsUrl + '/cats', cat, this.httpOptions);
  }
}

