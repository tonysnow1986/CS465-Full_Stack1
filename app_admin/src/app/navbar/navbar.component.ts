import { Authentication } from './../services/authentication';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authentication: Authentication
  ) { }

  ngOnInit() {}
    public isLoggedIn(): boolean {
      return this.authentication.isLoggedIn();
    }

    private onLogout(): void {
      return this.authentication.logout();
    }

}
