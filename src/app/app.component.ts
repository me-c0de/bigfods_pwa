import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bigfods-pwa';

  scroll(element: HTMLElement): void{
    element.scrollIntoView();
  }
}
