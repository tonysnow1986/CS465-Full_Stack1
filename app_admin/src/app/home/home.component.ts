import { Authentication } from './../services/authentication';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authentication: Authentication
  ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }

}
