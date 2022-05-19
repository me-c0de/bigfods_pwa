import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../model/cat';
import {HttpClient} from '@angular/common/http';
import {CatService} from '../../service/cat/cat.service';
import {ImageService} from '../../service/image/image.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  selectedFile: File;
  @Input() cat: Cat;

  constructor(private imageService: ImageService, private catService: CatService) { }

  ngOnInit(): void {
  }

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }


  public onUpdate(name: string, description: string): void {

    const formdata = new FormData();

    if (this.selectedFile){
      formdata.append('image', this.selectedFile, this.selectedFile.name);
      formdata.append('filename', this.selectedFile.name);
    }

    name = name.trim();
    if (!name){
      return;
    }

    const id = this.cat.id;

    this.catService.updateCat({ id, name, description} as Cat)
      .subscribe( cat => {
        if (this.selectedFile){
          this.imageService.updateImage(cat.image.id, formdata);
        }
      });
  }
}
