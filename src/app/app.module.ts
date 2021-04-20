import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeroImageComponent } from './hero-image/hero-image.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CarouselComponent } from './presentation/carousel/carousel.component';
import { HttpClientModule} from '@angular/common/http';
import { CatResidenceGalleryComponent } from './cat-residence-gallery/cat-residence-gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {NgxPageScrollModule} from "ngx-page-scroll";
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    PresentationComponent,
    CarouselComponent,
    CatResidenceGalleryComponent,
    AboutUsComponent,
    ContactComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPageScrollModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
