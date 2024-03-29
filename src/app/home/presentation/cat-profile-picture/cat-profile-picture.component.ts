import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../../model/cat';
import {ImageService} from '../../../service/image/image.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-cat-profile-picture',
  templateUrl: './cat-profile-picture.component.html',
  styleUrls: ['./cat-profile-picture.component.scss']
})
export class CatProfilePictureComponent implements OnInit {

  @Input() cat: Cat;
  imageToShow: any;

  constructor(private imageService: ImageService,  private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
     this.getImage(this.cat.image.id);
  }

  getImage(id): void {
    this.imageService.getImage(id)
      .subscribe(blob => this.imageToShow =  this.createImageFromBlob(blob));
  }

  private createImageFromBlob(image: Blob): SafeUrl {
    const urlCreator = window.URL;
    return this.sanitizer.bypassSecurityTrustUrl(
      urlCreator.createObjectURL(image));
  }
}
