import {HttpClient, HttpEventType, HttpHeaders} from '@angular/common/http';
import {Component} from '@angular/core';
import {Cat} from '../../../model/cat';
import {CatService} from '../../../service/cat/cat.service';
import {ImageService} from '../../../service/image/image.service';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {

  selectedFile: File;

  upload = new FormGroup({
    catName: new FormControl('', Validators.required),
    catDescription: new FormControl('', Validators.required),
  });


  constructor(private imageService: ImageService, private catService: CatService) {
  }

  public onFileChanged(event): void {
    this.selectedFile = event.target.files[0];
  }

  /*
    onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   this.images.push(event.target.result);

                   this.myForm.patchValue({
                      fileSource: this.images
                   });
                }

                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }
   */

  /*
  submit(){
    console.log(this.myForm.value);
    this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }
   */

  public onUpload(): void {

    const inputData = this.upload.value;

    const formData = new FormData();
    formData.append('image', this.selectedFile, this.selectedFile.name);
    formData.append('filename', this.selectedFile.name);

    this.imageService.addImage(formData).subscribe(
      image => {
        const cat: Cat = {
          name: inputData.catName,
          description: inputData.catDescription,
          image
        };
        this.catService.addCat(cat).subscribe(res => console.log(res));
      });
  }
}
