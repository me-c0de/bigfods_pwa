import { Component } from '@angular/core';
import {AuthService} from "./service/auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigfods-pwa';

  constructor(public authService: AuthService) {
  }

  scroll(element: HTMLElement): void{
    element.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
