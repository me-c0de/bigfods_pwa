import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Cat} from '../../model/cat';
import {CatService} from '../../service/cat/cat.service';
import {ImageService} from '../../service/image/image.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent{

  cats: Cat[] = [];
  selectedFile: File;
  clicked = false;


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=something' })
  };


  constructor(private imageService: ImageService, private catService: CatService) {
  }

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }

  public onUpload(name: string, description: string): void {

    const formdata = new FormData();
    formdata.append('image', this.selectedFile, this.selectedFile.name);
    formdata.append('filename', this.selectedFile.name);

    name = name.trim();
    if (!name){
      return;
    }

    this.clicked = true;

    this.catService.addCat({ name, description} as Cat)
      .subscribe(cat => this.imageService.addImage(cat.id, formdata));
  }
}
