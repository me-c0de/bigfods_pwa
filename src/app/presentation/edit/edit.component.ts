import {Component, Input, OnInit} from '@angular/core';
import {Cat} from '../../cat';
import {HttpClient} from '@angular/common/http';
import {CatService} from '../../cat.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  selectedFile: File;
  @Input() cat: Cat;

  constructor(private http: HttpClient, private catService: CatService) { }

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
          this.http.put('http://127.0.0.1:8080/api/images/' + cat.image.id, formdata).subscribe(res => console.log(res));
        }
      });
  }
}
