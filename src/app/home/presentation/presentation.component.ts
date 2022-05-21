import { Component, OnInit } from '@angular/core';
import {Cat} from '../../model/cat';
import {CatService} from '../../service/cat/cat.service';
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit{


  cats: Cat[] = [];
  showEdit = false;

  constructor(private catService: CatService, public authService: AuthService) {
  }

  public ngOnInit(): void {
    this.getCats();
  }

  public getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats);
  }

  public onDelete(cat: Cat): void {
    this.catService.deleteCat(cat.id).subscribe(res => console.log(res));
  }

  public onEdit(): void{
    this.showEdit = true;
  }
}
