import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-residence-gallery',
  templateUrl: './cat-residence-gallery.component.html',
  styleUrls: ['./cat-residence-gallery.component.scss']
})
export class CatResidenceGalleryComponent implements OnInit {


  galleryImg: string[] = [
    '../../assets/images/residence-img-001.jpg',
    '../../assets/images/residence-img-002.jpg',
    '../../assets/images/residence-img-003.jpg',
    '../../assets/images/cat-img-001.jpg',
    '../../assets/images/Maine-Coon.jpg',
    '../../assets/images/main-coon-rasse.jpg',
    '../../assets/images/josh-wilburne-140523-unsplash.jpg',
    '../../assets/images/db3i0b9z2z611.jpg',
    '../../assets/images/clay-banks-417989-unsplash.jpg',
    '../../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
