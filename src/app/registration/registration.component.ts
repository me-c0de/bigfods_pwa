import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../service/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  registration = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required),
    surename: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  public register(): void {
    this.authService.registerUser(this.registration.value).subscribe(response => {
      console.log(response);
    });
  }

}
