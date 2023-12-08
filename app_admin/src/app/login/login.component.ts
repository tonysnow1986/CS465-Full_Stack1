
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formError = '';
  public credentials = {
    name: '',
    email: '',
    password: ''
  };
evt: any;

  constructor(
    private router: Router,
    private authentication: Authentication
  ) { }

  ngOnInit() {}
    public onLoginSubmit(): void {
      this.formError = '';
      if (!this.credentials.email || !this.credentials.password) {
        this.formError = 'All fields are required, please try again';
      } else {
        this.doLogin();
      }
    }
    private doLogin(): void {
      this.authentication.login(this.credentials)
          .then(() => this.router.navigateByUrl('list-trips'))
          .catch((message) => this.formError = message);
    }
  }

