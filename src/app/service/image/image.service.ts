import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';
import {Image} from '../../model/image';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  catsUrl = 'http://127.0.0.1:8080/api';

  constructor(private http: HttpClient) { }

  updateImage(id: number, formdata: FormData): SafeUrl{
    return this.http.put<Image>(this.catsUrl + '/images/' + id, formdata)
      .subscribe(blob => console.log(blob));
  }

  addImage(id: number, formdata: FormData): SafeUrl {
    return this.http.post<Image>(this.catsUrl + '/cats/' + id + '/images', formdata)
      .subscribe(blob => console.log(blob));
  }

  getImage(id: number): Observable<Blob>{
    return this.http.get(this.catsUrl + '/cats/' + id + '/images', {responseType: 'blob'});
  }
}
