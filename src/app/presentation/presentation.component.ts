import { Component, OnInit } from '@angular/core';
import {Cat} from '../cat';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit{


  cats: Cat[] = [];

  constructor(private catService: CatService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats);
  }




}
