import { Component, OnInit } from '@angular/core';
import {Cat} from '../cat';
import {CatService} from '../cat.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit{


  cats: Cat[] = [];
  imageToShow: any;

  constructor(private http: HttpClient, private catService: CatService) {
  }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats);
    console.log(this.cats);
  }

  public onDelete(id): void {
    console.log('onDelete: executed');
    this.catService.deleteCat(id).subscribe(res => console.log(res));
  }
}
