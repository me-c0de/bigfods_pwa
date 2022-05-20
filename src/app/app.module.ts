import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { CarouselComponent } from './home/presentation/carousel/carousel.component';
import { HttpClientModule} from '@angular/common/http';
import { CatResidenceGalleryComponent } from './home/cat-residence-gallery/cat-residence-gallery.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactComponent } from './home/contact/contact.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import { ImageUploadComponent } from './home/image-upload/image-upload.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SafeHtmlPipe} from './home/image-upload/safeHtmlPipe';
import { CatProfilePictureComponent } from './home/presentation/cat-profile-picture/cat-profile-picture.component';
import { EditComponent } from './home/presentation/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {HeroImageComponent} from './home/hero-image/hero-image.component';
import { RegistrationComponent } from './registration/registration.component';
import {AdaptComponent} from './home/presentation/adapt/adapt.component';
import { NotificationComponent } from './home/notification/notification.component';


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
    HomeComponent,
    RegistrationComponent,
    AdaptComponent,
    NotificationComponent
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
