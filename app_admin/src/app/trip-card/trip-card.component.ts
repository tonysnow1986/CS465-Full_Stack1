import { Authentication } from './../services/authentication';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip} from '../models/trip';


@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('trip') trip: Trip;
  constructor(
    private router: Router,
    private authentication: Authentication
  ) { }


   ngOnInit() {
  }
  public isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }

  private editTrip(trip: Trip): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  private deleteTrip(trip: Trip): void {
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['delete-trip']);
  }

}
