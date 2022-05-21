import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cat} from '../../model/cat';
import {path} from '../constants/path';

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
    return this.http.get<Cat[]>(path.CAT_ENDPOINT);
  }

  deleteCat(catId): Observable<Cat[]>{
    return this.http.delete<Cat[]>(path.CAT_ENDPOINT + catId);
  }

  addCat(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>(path.CAT_ENDPOINT, cat, this.httpOptions);
  }

  updateCat(cat: Cat): Observable<Cat>{
    return this.http.put<Cat>(path.CAT_ENDPOINT + cat.id, cat, this.httpOptions);
  }
}

