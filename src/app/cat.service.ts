import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cat} from './cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsUrl = 'api/cats';

  constructor(
    private http: HttpClient,
  ) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.catsUrl);
  }
}
