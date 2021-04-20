import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Cat} from './cat';
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  catsUrl = 'http://localhost:8080/api';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(this.catsUrl + "/cats")
      .pipe(
      catchError(this.handleError<Cat[]>('getCats', []))
    );
  }

  addCat(cat: Cat): Observable<Cat>{
    return this.http.post<Cat>(this.catsUrl + "/cat", cat, this.httpOptions)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

