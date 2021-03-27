import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable} from 'rxjs';
import {Cat} from './cat';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const cats = [
      { id: 1, name: 'Felix', img: '../assets/images/menglong-bao-669459-unsplash.jpg', kittenImages: ['../assets/images/element5-digital-685202-unsplash.jpg', '../assets/images/maine-coon-katzenrassen-760x560.jpg', '../assets/images/menglong-bao-669459-unsplash.jpg'], description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'},
      { id: 2, name: 'Kitty', img: '../assets/images/maine-coon-katzenrassen-760x560.jpg', kittenImages: ['../assets/images/main-coon-rasse.jpg', '../assets/images/maine-coon-katzenrassen-760x560.jpg', '../assets/images/menglong-bao-669459-unsplash.jpg'], description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '},
      { id: 3, name: 'Snowball', img: '../assets/images/main-coon-rasse.jpg', kittenImages: ['../assets/images/main-coon-rasse.jpg', '../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg', '../assets/images/element5-digital-685202-unsplash.jpg'], description: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
      { id: 4, name: 'Miau', img: '../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg', kittenImages: ['../assets/images/element5-digital-685202-unsplash.jpg', '../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg', '../assets/images/main-coon-rasse.jpg'], description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
      { id: 5, name: 'Koro', img: '../assets/images/element5-digital-685202-unsplash.jpg', kittenImages: ['../assets/images/main-coon-rasse.jpg', '../assets/images/3d2a2c53b29634c9f6f37f34da74fb65.jpg', '../assets/images/maine-coon-katzenrassen-760x560.jpg'], description: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'},
    ];
    return {cats};
  }

  genId(heroes: Cat[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(cat => cat.id)) + 1 : 1;
  }

}
