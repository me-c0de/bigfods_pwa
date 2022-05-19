import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { CarouselComponent } from './presentation/carousel/carousel.component';
import { HttpClientModule} from '@angular/common/http';
import { CatResidenceGalleryComponent } from './cat-residence-gallery/cat-residence-gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeHtmlPipe} from './image-upload/safeHtmlPipe';
import { CatProfilePictureComponent } from './presentation/cat-profile-picture/cat-profile-picture.component';
import { EditComponent } from './presentation/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {HeroImageComponent} from './hero-image/hero-image.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroImageComponent,
    PresentationComponent,
    CarouselComponent,
    CatResidenceGalleryComponent,
    AboutUsComponent,
    ContactComponent,
    ImageUploadComponent,
    SafeHtmlPipe,
    CatProfilePictureComponent,
    EditComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPageScrollModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
