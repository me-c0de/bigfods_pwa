import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Image} from '../../model/image';
import {Observable} from 'rxjs';
import {path} from '../constants/path';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=something' })
  };

  constructor(private http: HttpClient) { }

  updateImage(id: number, formData: FormData): Observable<Image>{
    return this.http.put<Image>(path.IMAGE_ENDPOINT + id, formData);
  }

  addImage(formData: FormData): Observable<Image> {
    return this.http.post<Image>(path.IMAGE_ENDPOINT, formData);
  }

  getImage(id: number): Observable<Blob>{
    return this.http.get(path.IMAGE_ENDPOINT + id, {responseType: 'blob'});
  }
}
