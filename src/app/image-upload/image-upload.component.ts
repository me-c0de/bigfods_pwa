import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import { Component } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent{

  imageToShow: any;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data; boundary=something' })
  };

  selectedFile: File;
  isImageLoading: boolean;

  constructor(private http: HttpClient) {
  }

  public onFileChanged(event) {
   this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
  }

  public onUpload(){
    const formdata = new FormData();
    formdata.append("image", this.selectedFile, this.selectedFile.name);
    formdata.append("filename", this.selectedFile.name);
    this.http.post('http://localhost:8080/api/image', formdata)
      .subscribe(res => console.log(res));
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService() {
    this.isImageLoading = true;
    this.getImage("http://localhost:8080/api/image/1").subscribe(data => {
      this.createImageFromBlob(data);
      this.isImageLoading = false;
    }, error => {
      this.isImageLoading = false;
      console.log(error);
    });
  }
}
