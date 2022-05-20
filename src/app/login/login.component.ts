import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  responsedata: any;

  constructor(private authService: AuthService) {
    localStorage.clear();
  }

  login = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  proceedLogin(): void {
    if (this.login.valid) {
      this.authService.proceedLogin(this.login.value).subscribe(response => {
        if (response != null){
          this.responsedata = response;
          localStorage.setItem('token', this.responsedata.jwtToken);
        }
      });
    }
  }

}
