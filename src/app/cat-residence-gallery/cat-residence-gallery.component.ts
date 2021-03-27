import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-residence-gallery',
  templateUrl: './cat-residence-gallery.component.html',
  styleUrls: ['./cat-residence-gallery.component.scss']
})
export class CatResidenceGalleryComponent implements OnInit {


  galleryImg: string[] = [ '../../assets/images/tu-tu-322210-unsplash.jpg',
    '../../assets/images/rhema-kallianpur-560711-unsplash.jpg',
    '../../assets/images/menglong-bao-669459-unsplash.jpg',
    '../../assets/images/maine_coon.jpg',
    '../../assets/images/maine-coon-katzenrassen-760x560.jpg',
    '../../assets/images/Maine-Coon.jpg',
    '../../assets/images/kirill-zakharov-630681-unsplash.jpg',
    '../../assets/images/main-coon-rasse.jpg',
    '../../assets/images/josh-wilburne-140523-unsplash.jpg',
    '../../assets/images/element5-digital-685202-unsplash.jpg',
    '../../assets/images/db3i0b9z2z611.jpg',
    '../../assets/images/clay-banks-417989-unsplash.jpg',
    '../../assets/images/annie-spratt-651314-unsplash.jpg',
    '../../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
