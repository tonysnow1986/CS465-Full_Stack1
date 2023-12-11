import { Authentication } from './../services/authentication';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { trips } from '../data/trips';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';


@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[];

  message: string;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(
    private tripDataService: TripDataService,
    private authentication: Authentication,
    private router: Router
    ) { }

    private addTrip(): void {
      console.log('Inside TripListingComponent#addTrips');
      this.router.navigate(['add-trip']);
    }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
       .getTrips()
         .then(foundTrips => {
          this.message = foundTrips.length > 0 ? '' : 'No trips found';
          this.trips = foundTrips;
         });
  }

  public isLoggedIn(): boolean {
    return this.authentication.isLoggedIn();
  }

  ngOnInit(): void {
    this.getTrips();
  }

}
