import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../cat';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-cat-profile-picture',
  templateUrl: './cat-profile-picture.component.html',
  styleUrls: ['./cat-profile-picture.component.scss']
})
export class CatProfilePictureComponent implements OnInit {

  @Input() cat: Cat;
  imageToShow: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImage(this.cat.id);
  }

  getImage(id): void {
    this.http.get('http://localhost:8080/api/cat/' + id + '/image', { responseType: 'blob' })
      .subscribe(data => { this.createImageFromBlob(data); });
  }

  createImageFromBlob(image: Blob): void {
    const urlCreator = window.URL;
    this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(image));
  }
}
