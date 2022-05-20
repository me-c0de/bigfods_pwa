import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../model/cat';
import {CatService} from '../../service/cat/cat.service';

@Component({
  selector: 'app-adapt',
  templateUrl: './adapt.component.html',
  styleUrls: ['./adapt.component.scss']
})
export class AdaptComponent implements OnInit {

  showEdit = false;
  @Input() cat: Cat;
  constructor(private catService: CatService) { }

  ngOnInit(): void {
  }

  public onDelete(id): void {
    this.catService.deleteCat(id).subscribe(res => console.log(res));
  }

  public onEdit(cat: Cat): void{
    this.showEdit = true;
  }
}
