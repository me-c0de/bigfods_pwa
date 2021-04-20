import { Component, OnInit } from '@angular/core';
import {Cat} from '../cat';
import {CatService} from "../cat.service";

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent{


  cats: Cat[] = [];
  catsUrl = 'http://localhost:8080/api/cats';

  constructor(private catService: CatService) {
    this.getCats()
  }

  getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats)
    console.log(this.cats)
  }

  add(name: string, description: string, imageInput: any){

    const file : File = imageInput.files[0];


    name = name.trim();
    if(!name){
      return;
    }
    this.catService.addCat({ name, description, file } as Cat)
      .subscribe(cat => {this.cats.push(cat)})
  }
}
