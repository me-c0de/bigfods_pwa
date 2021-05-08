import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Cat} from '../cat';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent{

  cats: Cat[] = [];
  selectedFile: File;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=something' })
  };


  constructor(private http: HttpClient, private catService: CatService) {
  }

  public onFileChanged(event): void {
   this.selectedFile = event.target.files[0];
   console.log(this.selectedFile);
  }

  public onUpload(name: string, description: string): void {
    const formdata = new FormData();
    formdata.append('image', this.selectedFile, this.selectedFile.name);
    formdata.append('filename', this.selectedFile.name);

    name = name.trim();
    if (!name){
      return;
    }

    this.catService.addCat({ name, description} as Cat)
      .subscribe( cat => this.http.post('http://localhost:8080/api/cat/' + cat.id + '/image', formdata)
        .subscribe(res => console.log(res)));
  }


}
